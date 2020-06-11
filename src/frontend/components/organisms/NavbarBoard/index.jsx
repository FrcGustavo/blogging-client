import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const NavbarBoard = () => (
  <nav className="navbar-board">
    <Link to="/board">Home</Link>
    <Link to="/board/posts">Publicaciones</Link>
    <Link to="/board/users">Usuarios</Link>
  </nav>
);

export default NavbarBoard;
