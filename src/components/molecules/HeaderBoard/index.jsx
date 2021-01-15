import { AiOutlineMenu } from 'react-icons/ai';
import { useUserDispatch } from 'store/contexts';
import { logoutAction } from 'store/actions';
import { CSSHeader, CSSMenuContainer, CSSCircleImage, CSSMenu, HandleMenuCSS } from './styles';

const HeaderBoard = ({ handleNavbar }) => {
  const dispatch = useUserDispatch();
  const handleLogout = () => {
   dispatch(logoutAction());
  }

  return (
    <CSSHeader>
      <HandleMenuCSS onClick={handleNavbar}><AiOutlineMenu/></HandleMenuCSS>
      <CSSMenuContainer>
        <CSSCircleImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
        <CSSMenu>
          <button onClick={handleLogout}>Salir</button>  
        </CSSMenu>
      </CSSMenuContainer>
    </CSSHeader>
  );
};

export default HeaderBoard;
