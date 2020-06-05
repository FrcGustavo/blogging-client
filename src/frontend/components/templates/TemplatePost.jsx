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
    <section className="post-content" dangerouslySetInnerHTML={{ __html: post.post }} />
  </div>
);

TemplatePost.propTypes = {
  post: PropTypes.objectOf().isRequired,
};

export default TemplatePost;
