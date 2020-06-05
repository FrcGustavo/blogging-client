import React from 'react';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';

const CardPost = ({ post }) => (
  <article className="card-post">
    <div className="image-container">
      <img src={post.cover} alt="" />
    </div>
    <div className="card-post-info">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <Button to={`/${post.slug}`}>Leer más</Button>
    </div>
  </article>
);

CardPost.propTypes = {
  post: PropTypes.objectOf().isRequired,
};

export default CardPost;
