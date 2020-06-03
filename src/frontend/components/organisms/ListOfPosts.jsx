import React from 'react';
import PropTypes from 'prop-types';

import CardPost from '../mulecules/CardPost';

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

ListOfPosts.propTypes = {
  posts: PropTypes.objectOf().isRequired,
};

export default ListOfPosts;
