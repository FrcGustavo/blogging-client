import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../organisms/Header';

import './styles.scss';

const LayoutBlog = ({ children }) => (
  <div className="blog-app">
    <Header />
    { children }
  </div>
);

LayoutBlog.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LayoutBlog;
