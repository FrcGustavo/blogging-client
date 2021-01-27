import { useState } from 'react';

const useEditPost = (post, file) => {
  const [data, setData] = useState(post);
  const [language, setLanguage] = useState('es');

  const reLanguage = new RegExp(/(es|en)/);

  const handleLanguagetoggle = () => (language === 'en') ? setLanguage('es') : setLanguage('en');
  
  const handleChange = async (e) => {
    if (e.target.type === 'file' && file) {      
      return setData({
        ...data,
        [e.target.name]: await file(e.target.files),
      });
    }

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

  return [data, handleChange, language, handleLanguagetoggle];
}

export default useEditPost;