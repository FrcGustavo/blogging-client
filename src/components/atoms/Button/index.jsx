import Link from 'next/link';
import { CSSButton, CSSButtonLink } from './styles';

const Button = ({ children, href }) => {
  if (!href) {
    return (
      <CSSButton>
        {children}
      </CSSButton>
    );
  } else {
    return (
      <Link href={href}>
        <CSSButtonLink>
          {children}
        </CSSButtonLink>
      </Link>
    );
  }
}

export default Button;
