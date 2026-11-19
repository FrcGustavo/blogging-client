import type { ComponentPropsWithRef, ReactNode } from 'react';
import { createLink } from '@tanstack/react-router';
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

type ButtonAnchorProps = Omit<ComponentPropsWithRef<'a'>, 'color'>;

export const ButtonLink = createLink(function ButtonAnchor(props: ButtonAnchorProps) {
  return <CSSButtonLink component="a" {...props} />;
});

export default Button;
