import { useState, useEffect } from 'react';
import showdown from 'showdown';
import { useEditPost, useAlert, useModal } from 'root/hooks';
import { Metadata, Editor, Modal, Alert } from '@/molecules';
import { PostsService, UploadsService } from 'root/services';
import { CSSEditorContainer,  } from './styles';

const Html = new showdown.Converter();

const file = async (files) => {
  try {
    const data = await UploadsService.image(files[0]);
    return data.secure_url;
  } catch (error) {
    return '';
  }
}

const PostEditor = ({ data: post }) => {
  const [data, handleChange, language, handleLanguagetoggle] = useEditPost(post, file);
  const [isMetadataModalOpen, handleCloseMetadata, handleOpenMetadata] = useModal();
  const [isAlertModalOpen, alertMessage, handleCloseAlert, handleOpenAlert] = useAlert();
  const [disabledButtons, setDisabledButtons] = useState(false);
  const [html, setHtml] = useState(Html.makeHtml(data[language].body));

  useEffect(() => {
    setHtml(Html.makeHtml(data[language].body));
  }, [data[language].body]);

  const handleSavePublic = async (isForPublic = false) => {
    try {
      setDisabledButtons(true);
      handleOpenAlert('Guardando', 'El post se esta guardando');
      if (isForPublic) {
        await PostsService.publish(data, data.id);
        handleChange({ target: { name: 'isPublic', value: !data.isPublic }})
      } else {
        await PostsService.save(data, data.id);
      }
      handleOpenAlert('Guardado', 'El post se guardado con exito', 'success');
      setDisabledButtons(false);
    }
    catch (err){
      handleOpen('Error', 'Algo salio mal intenta mas tarde', 'fail');
    }
  }

  const handleSave = async () => await handleSavePublic();
  const handlePublic = async () => await handleSavePublic(true);

  return (
    <CSSEditorContainer>
      <Editor
        data={data}
        html={html}
        lang={language}
        onSave={handleSave}
        onPublic={handlePublic}
        onMetadata={handleOpenMetadata}
        onLanguage={handleLanguagetoggle}
        onHandleChange={handleChange}
        disabledButtons={disabledButtons}
      />
      <Metadata
        data={data}
        onHandleChange={handleChange}
        isOpen={isMetadataModalOpen} 
        close={handleCloseMetadata}
        lang={language}
      />
      <Modal isModalOpen={isAlertModalOpen}>
        <Alert
          title={alertMessage.title}
          message={alertMessage.message}
          status={alertMessage.status}
          onClose={handleCloseAlert}
        />
      </Modal>
    </CSSEditorContainer>
  );
}

export default PostEditor;