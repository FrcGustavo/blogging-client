import { useState } from 'react';

const useAlert = () => {
  let showingAlert = null;
  const [isAlertModalOpen, setAlertModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ title: '', message: '', status: ''});
  
  const handleCloseAlert = () => { 
    clearTimeout(showingAlert);
    showingAlert = null;
    setAlertModal(false);
  }
  const handleOpenAlert = (title, message, status) => {
    handleCloseAlert();
    setAlertModal(true);
    setAlertMessage({ title, message, status});
    showingAlert = setTimeout(() => {
      handleCloseAlert();
    }, 5000);
  }

  return [isAlertModalOpen, alertMessage, handleCloseAlert, handleOpenAlert];
}

export default useAlert;