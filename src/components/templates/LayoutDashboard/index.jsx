import { useAppState, useAppDispatch } from '../../../store/contexts';
import { handleOpenMenu } from '../../../store/actions';
import { HeaderBoard, Navbar } from '@/molecules';
import { CSSDashboard, CSSMain } from './styles';

const LayoutDashboard = ({ children }) => {
  const dispatch = useAppDispatch();
  const { isMenuOpen } = useAppState();

  const handleNavbar = () => {
    dispatch(handleOpenMenu(!isMenuOpen));
  }

  return (
    <CSSDashboard showNavbar={isMenuOpen}>
      <Navbar showNavbar={isMenuOpen} />
      <HeaderBoard handleNavbar={handleNavbar} />
      <CSSMain>
        {children}
      </CSSMain>
    </CSSDashboard>
  );
}

export default LayoutDashboard;
