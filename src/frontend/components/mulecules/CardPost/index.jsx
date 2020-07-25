import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';

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
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardPost;
