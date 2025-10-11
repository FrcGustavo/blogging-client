import Image from 'next/image';
import { useRouter } from 'next/router';
import { Container } from 'root/styles';
import { CSSHeader, CSSNav, NavItem, CSSLogo } from './styles';

const Header = ({ shadow }) => {
  const { asPath, locale } = useRouter();
  const isLocaleEnglish = locale === 'en';
  return (
    <CSSHeader shadow={shadow}>
      <Container>
        <CSSLogo href="/">
          <Image
            src="/icons/bloging-logo-192.png"
            layout="fixed"
            width="40"
            height="40"
            alt="blogging logo"
          />
        </CSSLogo>
        <CSSNav>
          {/* <Link
            href={`/${isLocaleEnglish ? 'es' : 'en'}${asPath}`}
            locale={false}
          >
            <a>
              <img
                src={isLocaleEnglish ? '/spanish.svg' : '/english.svg'}
                alt="idioma"
                width="35px"
                height="35px"
              />
            </a>
          </Link> */}
          <NavItem href="/">Home</NavItem>
          <NavItem href="/blog">Blog</NavItem>
        </CSSNav>
      </Container>
    </CSSHeader>
  );
};

export default Header;
