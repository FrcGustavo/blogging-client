import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from 'root/styles';
import { CSSHeader, CSSNav, NavItem, CSSLogo } from './styles';

const Header = ({ shadow }) => {
  const { asPath, locale } = useRouter();
  const isLocaleEnglish = locale === 'en';
  return (
    <CSSHeader shadow={shadow}>
      <Container>
          <Link href="/">
            <CSSLogo>
              <span>F</span>
              <span>rc</span>
              <span>G</span>
              <span>ustavo</span>
            </CSSLogo>
          </Link>
        <CSSNav>
          <Link href={`/${isLocaleEnglish ? 'es' : 'en'}${asPath}`} locale={false}>
            <a>
              <img src={isLocaleEnglish ? '/spanish.svg' : '/english.svg'} />
            </a>
          </Link>
          <Link href="/">
            <NavItem>Home</NavItem>
          </Link>
          <Link href="/blog">
            <NavItem>Blog</NavItem>
          </Link>
        </CSSNav>
      </Container>
    </CSSHeader>
  );
}

export default Header;
