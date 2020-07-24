import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

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
