import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';

import './styles.scss';

const FirstPost = ({ post }) => (
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

FirstPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default FirstPost;
