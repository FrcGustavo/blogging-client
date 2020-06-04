import React from 'react';
import { Link } from 'react-router-dom';

const Board = () => (
  <>
    <div>
      <header>Home</header>
    </div>
    <main>
      This is the home
      <Link to="/blog/new">Escribir Nuevo Post</Link>
    </main>
    <footer>
      this is the footer
    </footer>
  </>
);

export default Board;
