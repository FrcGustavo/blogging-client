import Link from 'next/link';
import { CSSNavbar, CSSNavItem } from './styles';

const Navbar = ({ showNavbar }) => {
  return (
    <CSSNavbar showNavbar={showNavbar}>
      <div>
        <Link href="/dashboard/posts">
          <CSSNavItem active>Publicaciones</CSSNavItem>
        </Link>
        <Link href="/dashboard/posts/new">
          <CSSNavItem>Nuevo</CSSNavItem>
        </Link>
      </div>
    </CSSNavbar>
  );
}

export default Navbar;