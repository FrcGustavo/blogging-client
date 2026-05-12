import type { ReactNode } from 'react';
import ReactDom from 'react-dom';

interface ModalProps {
  isModalOpen: boolean;
  children: ReactNode;
}

const Modal = ({ isModalOpen, children }: ModalProps) => {
  if (!isModalOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <>{children}</>,
    document.getElementById('modal')
  );
};

export default Modal;
