import Link from 'next/link';
import { CSSButton, CSSButtonLink } from './styles';

const Button = ({ children, type = 'button', href, onHandleClick }) => {
  if (!href) {
    return (
      <CSSButton type={type} onClick={onHandleClick}>
        {children}
      </CSSButton>
    );
  } else {
    return (
      <Link href={href} passHref>
        <CSSButtonLink>{children}</CSSButtonLink>
      </Link>
    );
  }
};

export default Button;
