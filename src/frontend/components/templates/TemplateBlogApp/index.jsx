import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../../organisms/Header';

import './styles.scss';

const LayoutBlog = ({ children }) => {
  const [shadow, setShadow] = useState(false);

  const handleScroll = (event) => {
    if (event.target.scrollTop > 0) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  return (
    <div className="blog-app" onScroll={handleScroll}>
      <Header shadow={shadow} />
      { children }
    </div>
  );
};

LayoutBlog.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LayoutBlog;
