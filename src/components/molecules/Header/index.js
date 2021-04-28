import Link from 'next/link';
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
        <Link href="/" passHref>
          <CSSLogo>
            <Image
              src="/icons/bloging-logo-192.png"
              layout="fixed"
              width="40px"
              height="40px"
            />
          </CSSLogo>
        </Link>
        <CSSNav>
          <Link
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
          </Link>
          <Link href="/" passHref>
            <NavItem>Home</NavItem>
          </Link>
          <Link href="/blog" passHref>
            <NavItem>Blog</NavItem>
          </Link>
        </CSSNav>
      </Container>
    </CSSHeader>
  );
};

export default Header;
