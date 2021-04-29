import { useState, FC, ReactNode } from 'react';
import { Downbar, Sidebar } from '@ghost/components/molecules';
import { CSSLayout, CSSMain } from './styles';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <CSSLayout>
      <Sidebar
        openMobile={isMobileNavOpen}
        onMobileNavClose={() => setMobileNavOpen(false)}
      />
      <CSSMain>{children}</CSSMain>
      <Downbar onMobileNavOpen={() => setMobileNavOpen(true)} />
    </CSSLayout>
  );
};

export default Layout;
