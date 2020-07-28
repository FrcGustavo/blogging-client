import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

const Header = ({ shadow }) => (
  <header className={shadow ? 'header sticky' : 'header'}>
    <div className="header-container">
      <Link className="logo" to="/">FrcGustavo</Link>
      <nav className="nav">
        <Link className="btn btn-secondary" to="/">Home</Link>
        <Link className="btn btn-secondary" to="/blog">Blog</Link>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  shadow: PropTypes.bool.isRequired,
};

export default Header;
