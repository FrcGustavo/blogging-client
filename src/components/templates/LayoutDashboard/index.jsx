import { useState } from 'react';
import { HeaderBoard, Navbar } from '@/molecules';
import { CSSDashboard, CSSMain } from './styles';

const LayoutDashboard = ({ children }) => {
  const [navbar, setNavbar] = useState(false);
  const handleNavbar = () => {
    setNavbar(!navbar);
  }

  return (
    <CSSDashboard showNavbar={navbar}>
      <Navbar showNavbar={navbar} />
      <HeaderBoard handleNavbar={handleNavbar} />
      <CSSMain>
        {children}
      </CSSMain>
    </CSSDashboard>
  );
}

export default LayoutDashboard;
