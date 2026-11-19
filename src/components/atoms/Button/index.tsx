import type { ReactNode } from 'react';
import { CSSButton, CSSButtonLink } from './styles';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  onHandleClick?: () => void;
}

const Button = ({ children, type = 'button', href, onHandleClick }: ButtonProps) => {
  if (!href) {
    return (
      <CSSButton type={type} onClick={onHandleClick}>
        {children}
      </CSSButton>
    );
  }

  return <CSSButtonLink href={href}>{children}</CSSButtonLink>;
};

export default Button;
