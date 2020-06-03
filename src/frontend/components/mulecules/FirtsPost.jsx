import React from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';

const FirtsPost = ({ post }) => (
  <article className="first-post">
    <div className="img-container">
      <img src={post.cover} alt={post.title} />
    </div>
    <div className="first-post-info">
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <Button to={`/${post.slug}`}>Leer mas</Button>
    </div>
  </article>
);

FirtsPost.propTypes = {
  post: PropTypes.objectOf().isRequired,
};

export default FirtsPost;
