import { useState } from 'react';

const useAlert = (data = { title: '', message: '', status: ''}) => {
  const [isOpen, setModal] = useState(false);
  const [AlertData, setAlert] = useState({ title: '', message: '', status: ''});

  const handleClose = (reset = false) => {
    setModal(false);
    if (reset){
      setAlert({ title: '', message: '', status: '' });
    }
  };

  const handleOpen = (title, message, status) => {
    const newAlert = { 
      title: title ? title : AlertData.title, 
      message: message ? message : AlertData.message, 
      status: status ? status : AlertData.status
    }
    setAlert(newAlert);
    setModal(true);
  }

  return [isOpen, AlertData, handleClose, handleOpen];
}

export default useAlert;