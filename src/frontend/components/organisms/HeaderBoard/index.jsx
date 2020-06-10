import React from 'react';

import IconMenu from '../../atoms/IconMenu';

import './styles.scss';

const HeaderBoard = () => (
  <header className="header-board">
    <div className="header-board-container">
      <button type="button">
        <IconMenu />
      </button>
      <div>
        Perfil
      </div>
    </div>
  </header>
);

export default HeaderBoard;
