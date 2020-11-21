import { useState, useEffect } from 'react';
import showdown from 'showdown';
import { useForm, useAlert } from 'root/hooks';
import { Metadata, Editor, Modal, Alert } from '@/molecules';
import { PostsService, UploadsService } from 'root/services';
import { CSSEditorContainer,  } from './styles';

const Html = new showdown.Converter();

const middleware = (data, field) => {
  if (field === 'title') {
    data.slug = data.title.toLowerCase();
  }
  return data;
}

const file = async (files) => {
  try {
    const data = await UploadsService.image(files[0]);
    return data.secure_url;
  } catch (error) {
    return '';
  }
}

const PostEditor = ({ data }) => {
  const [isOpen, AlertData, handleClose, handleOpen] = useAlert();
  const { data: post, handleChange } = useForm(data, { middleware, file });
  const [metadataModal, setMetadataModal] = useState(false);
  const [html, setHtml] = useState(Html.makeHtml(post.body));
  
  useEffect(() => {
    setHtml(Html.makeHtml(post.body));
  }, [post.body]);

  const handleSave = async () => {
    handleOpen('Guardando', 'El post se esta guardando');
    try {
      const idOrSlug = post.id ? post.slug : post.id;
      const id = await PostsService.save(post, idOrSlug)
      handleChange({ target: { name: 'id', value: id } });
      handleOpen('Guardado', 'El post se guardado con exito', 'success');
    } catch {
      handleOpen('Error', 'Algo salio mal intenta mas tarde', 'fail');
    }
  }

  const handlePublic = async () => {
    try {
      await handleSave();
      await PostsService.publish({ isPublic: !post.isPublic }, post.slug);
      handleChange({ target: { name: 'isPublic', value: !post.isPublic } });
      handleOpen('Guardado', 'El post se guardado con exito', 'success');
    } catch(error) {
      console.log('ERRROROR 2', error);
      handleOpen('Error', 'Algo salio mal intenta mas tarde', 'fail');
    }
  }

  const handleOpenMetadata = () => setMetadataModal(true);
  const handleCloseMetadata = () => setMetadataModal(false);

  return (
    <CSSEditorContainer>
      <Editor
        data={post}
        html={html}
        onHandleChange={handleChange}
        onSave={handleSave}
        onPublic={handlePublic}
        onMetadata={handleOpenMetadata}
        disabled={isOpen}
      />
      <Metadata
        data={post}
        onHandleChange={handleChange}
        isOpen={metadataModal} 
        close={handleCloseMetadata}
      />
      <Modal isModalOpen={isOpen}>
        <Alert
          title={AlertData.title}
          message={AlertData.message}
          status={AlertData.status}
          onClose={handleClose}
        />
      </Modal>
    </CSSEditorContainer>
  );
}

export default PostEditor;