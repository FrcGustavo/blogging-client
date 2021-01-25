import { useUser } from 'store/contexts';
import { AiOutlineMenu } from 'react-icons/ai';
import { useUserDispatch } from 'store/contexts';
import { logoutAction } from 'store/actions';
import { CSSHeader, CSSMenuContainer, CSSCircleImage, CSSMenu, HandleMenuCSS } from './styles';

const HeaderBoard = ({ handleNavbar }) => {
  const user = useUser();
  const dispatch = useUserDispatch();
  const handleLogout = () => {
   dispatch(logoutAction());
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
