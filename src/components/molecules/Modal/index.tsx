import type { ReactNode } from 'react';
import Portal from '@mui/material/Portal';

interface ModalProps {
  isModalOpen: boolean;
  children: ReactNode;
}

const Modal = ({ isModalOpen, children }: ModalProps) => {
  if (!isModalOpen) {
    return null;
  }

  return <Portal container={() => document.getElementById('modal')}>{children}</Portal>;
};

export default Modal;
