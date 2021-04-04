import { useSession, signOut } from 'next-auth/client';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  CSSHeader,
  CSSMenuContainer,
  CSSCircleImage,
  CSSMenu,
  HandleMenuCSS,
} from './styles';

const HeaderBoard = ({ handleNavbar }) => {
  const [session] = useSession();
  const handleLogout = () => signOut();

  return (
    <CSSHeader>
      <HandleMenuCSS onClick={handleNavbar}>
        <AiOutlineMenu />
      </HandleMenuCSS>
      <CSSMenuContainer>
        <CSSCircleImage src={session?.user?.image} alt={session?.user?.name} />
        <CSSMenu>
          <button onClick={handleLogout}>Salir</button>
        </CSSMenu>
      </CSSMenuContainer>
    </CSSHeader>
  );
};

export default HeaderBoard;
