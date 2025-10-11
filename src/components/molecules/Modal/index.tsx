import ReactDOM from 'react-dom';
import type { ReactNode, ReactPortal } from 'react';

type ModalProps = {
  isModalOpen: boolean;
  children: ReactNode;
};

const Modal = ({ isModalOpen, children }: ModalProps): ReactPortal | null => {
  if (!isModalOpen || typeof document === 'undefined') {
    return null;
  }

  const modalRoot = document.getElementById('modal');

  if (!modalRoot) {
    return null;
  }

  return ReactDOM.createPortal(children, modalRoot);
};

export default Modal;
