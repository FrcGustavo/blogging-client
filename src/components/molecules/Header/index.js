import Link from 'next/link';
import { Container } from 'root/styles';
import { CSSHeader, CSSNav, CSSLogo } from './styles';

const Header = ({ shadow }) => {
  return (
    <CSSHeader shadow={shadow}>
      <Container>
          <Link href="/">
            <CSSLogo>FrcGustavo</CSSLogo>
          </Link>
        <CSSNav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="blog">
            <a>Blog</a>
          </Link>
        </CSSNav>
      </Container>
    </CSSHeader>
  );
}

export default Header;
