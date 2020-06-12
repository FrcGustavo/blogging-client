import React from 'react';

import IconMenu from '../../atoms/IconMenu';

import './styles.scss';

const HeaderBoard = () => {
  const handleLogout = () => {
    document.cookie = 'username=';
    document.cookie = 'email=';
    document.cookie = 'id=';
    document.cookie = 'token=';
    window.location.href = '/';
  };

  return (
    <header className="header-board">
      <div className="header-board-container">
        <button type="button">
          <IconMenu />
        </button>
        <div>
          <button type="button" onClick={handleLogout}>Salir</button>
        </div>
      </div>
    </header>
  );
};
export default HeaderBoard;
