import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const LayoutBlog = ({ children }) => (
  <>
    <Header />
    { children }
    <Footer />
  </>
);

LayoutBlog.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LayoutBlog;
