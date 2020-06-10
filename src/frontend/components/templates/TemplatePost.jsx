/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

const TemplatePost = ({ post }) => (
  <div className="template-post">
    <section className="post-cover">
      <img src={post.cover} alt={post.title} />
    </section>
    <section className="post-title">
      <h1>{post.title}</h1>
    </section>
    <section className="post-content" dangerouslySetInnerHTML={{ __html: post.body }} />
  </div>
);

TemplatePost.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.string.isRequired,
    userCover: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    timeShared: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default TemplatePost;
