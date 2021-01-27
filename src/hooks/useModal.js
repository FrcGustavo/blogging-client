import { useState } from 'react';

const useModal = () => {
  const [isModalOpen, setModal] = useState(false);

  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  return [isModalOpen, handleClose, handleOpen];
}

export default useModal;