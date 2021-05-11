import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CSSSidebarContainer,
  CSSSidebar,
  CSSLogo,
  CSSTitleLogo,
  CSSNav,
  CSSNavSection,
  CSSLinkItem,
  CSSStaticItem,
} from './styles';
import NAV_ROUTES from './routes';

const Nav = () => {
  return (
    <CSSNav>
      {NAV_ROUTES.map(({ label, href, items, Icon }) => (
        <CSSNavSection>
          {!href && <CSSStaticItem>{label}</CSSStaticItem>}
          {href && (
            <Link href={href} passHref>
              <CSSLinkItem>
                {Icon && <Icon />}
                {label}
              </CSSLinkItem>
            </Link>
          )}
          {items &&
            items.map(({ label, href, Icon }) => (
              <Link href={href} passHref>
                <CSSLinkItem>
                  {Icon && <Icon />}
                  {label}
                </CSSLinkItem>
              </Link>
            ))}
        </CSSNavSection>
      ))}
    </CSSNav>
  );
};

type SidebarProps = {
  openMobile: boolean;
  onMobileNavClose: () => void;
};

const Sidebar: FC<SidebarProps> = ({ openMobile, onMobileNavClose }) => {
  const handleMobileNavClose = (_event: Event) => {
    _event.stopPropagation();
    onMobileNavClose();
  };

  return (
    <CSSSidebarContainer openMobile={openMobile} onClick={handleMobileNavClose}>
      <CSSSidebar onClick={(_event: Event) => _event.stopPropagation()}>
        <CSSLogo>
          <Image
            src="/icons/bloging-logo-192.png"
            layout="fixed"
            width="40px"
            height="40px"
          />
          <CSSTitleLogo>Blogging ghost</CSSTitleLogo>
        </CSSLogo>
        <Nav />
      </CSSSidebar>
    </CSSSidebarContainer>
  );
};

export default Sidebar;
