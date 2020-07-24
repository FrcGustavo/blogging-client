import React from 'react';
import PropTypes from 'prop-types';

import CardPost from '../../mulecules/CardPost';

const ListOfPosts = ({ posts }) => (
  <div className="list-of-posts">
    {
      posts.map((post, idx) => {
        if (idx === 0) return false;
        return <CardPost key={post.slug} post={post} />;
      })
    }
  </div>
);

const Post = PropTypes.shape({
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}).isRequired;

ListOfPosts.propTypes = {
  posts: PropTypes.arrayOf(Post).isRequired,
};

export default ListOfPosts;
