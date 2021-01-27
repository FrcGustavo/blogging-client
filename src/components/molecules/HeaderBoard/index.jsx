import { AiOutlineMenu } from 'react-icons/ai';
import { useAppState, useAppDispatch } from 'store/contexts';
import { logout } from 'store/actions';
import { CSSHeader, CSSMenuContainer, CSSCircleImage, CSSMenu, HandleMenuCSS } from './styles';

const HeaderBoard = ({ handleNavbar }) => {
  const { user } = useAppState();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
   dispatch(logout());
  }

  return (
    <CSSHeader>
      <HandleMenuCSS onClick={handleNavbar}><AiOutlineMenu/></HandleMenuCSS>
      <CSSMenuContainer>
        <CSSCircleImage src={user ? user.cover : ''} alt={user ? user.firstName : ''}/>
        <CSSMenu>
          <button onClick={handleLogout}>Salir</button>  
        </CSSMenu>
      </CSSMenuContainer>
    </CSSHeader>
  );
};

export default HeaderBoard;
