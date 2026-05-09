import Link from 'next/link';
import { CSSButton, CSSButtonLink } from './styles';

const Button = ({ children, type = 'button', href, onHandleClick }) => {
  if (!href) {
    return (
      <CSSButton type={type} onClick={onHandleClick}>
        {children}
      </CSSButton>
    );
  }

  return (
    <CSSButtonLink component={Link} href={href}>
      {children}
    </CSSButtonLink>
  );
};

export default Button;
