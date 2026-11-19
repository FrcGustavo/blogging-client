import { Container } from 'root/styles';
import { CSSHeader, CSSNav, NavItem, CSSLogo } from './styles';

interface HeaderProps {
  shadow?: boolean;
}

const Header = ({ shadow }: HeaderProps) => {
  return (
    <CSSHeader shadow={shadow} elevation={0}>
      <Container>
        <CSSLogo to="/">
          <img
            src="/icons/bloging-logo-192.png"
            width="40"
            height="40"
            alt="blogging logo"
          />
        </CSSLogo>
        <CSSNav>
          <NavItem to="/" activeOptions={{ exact: true }}>Home</NavItem>
          <NavItem to="/blog">Blog</NavItem>
        </CSSNav>
      </Container>
    </CSSHeader>
  );
};

export default Header;
