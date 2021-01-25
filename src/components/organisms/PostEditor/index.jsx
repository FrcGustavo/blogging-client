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

const reLanguage = new RegExp(/(es|en)/);

const PostEditor = ({ data: post }) => {
  const [data, setData] = useState(post);
  const [language, setLanguage] = useState('es');
  const [isMetadataModalOpen, setMetadataModal] = useState(false);
  const [isOpen, AlertData, handleClose, handleOpen] = useAlert();
  const [html, setHtml] = useState(Html.makeHtml(data[language].body));

  useEffect(() => {
    setHtml(Html.makeHtml(data[language].body));
  }, [data[language].body]);

  const handleChange = (e) => {
    if (reLanguage.test(e.target.name)) {
      setData({
        ...data,
        [language]: {
          ...data[language],
          [e.target.name.substr(3)]: e.target.value
        }
      })
    } else {
     setData({
       ...data,
       [e.target.name]: e.target.value
     }) 
    }
  }

  const handleSave = () => {
    handleOpen('Guardando', 'El post se esta guardando');
    PostsService.save(data, data.id)
    .then((res) => {
      console.log(res);
        handleOpen('Guardado', 'El post se guardado con exito', 'success');
      });
  }
  const handlePublic = () => {}

  const handleOpenMetadata = () => setMetadataModal(true);
  const handleCloseMetadata = () => setMetadataModal(false);
  const handleLanguagetoggle = () => {
    if (language === 'en') setLanguage('es');
    else setLanguage('en')
  };

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
        disabledButtons={false}
      />
      <Metadata
        data={data}
        onHandleChange={handleChange}
        isOpen={isMetadataModalOpen} 
        close={handleCloseMetadata}
        lang={language}
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