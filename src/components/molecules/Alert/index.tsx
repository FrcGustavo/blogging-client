import { AiFillCloseCircle } from 'react-icons/ai';
import { CSSAlert, CSSTitle, CSSMessage, CSSCloseButton } from './styles';

interface AlertProps {
  title: string;
  message: string;
  onClose: () => void;
  status?: string;
}

const Alert = ({ title, message, onClose, status }: AlertProps) => {
  return (
    <CSSAlert status={status}>
      <CSSCloseButton onClick={onClose}>
        <AiFillCloseCircle />
      </CSSCloseButton>
      <CSSTitle>{title}</CSSTitle>
      <CSSMessage>{message}</CSSMessage>
    </CSSAlert>
  );
};

export default Alert;
