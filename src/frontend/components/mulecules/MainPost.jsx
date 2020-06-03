import React from 'react';
import PropTypes from 'prop-types';

import Button from '../atoms/Button';

const MainPost = ({ post }) => (
  <article className="main-post">
    <div className="img-container">
      <img src={post.cover} alt={post.title} />
    </div>
    <div className="main-post-info">
      <h3>{ post.title }</h3>
      <p>{ post.description}</p>
      <Button to={`/${post.slug}`}>Leer más</Button>
    </div>
  </article>
);

MainPost.propTypes = {
  post: PropTypes.objectOf().isRequired,
};

export default MainPost;