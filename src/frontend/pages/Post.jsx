import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TemplatePost from '../components/templates/TemplatePost';
import LayoutBlog from '../components/LayoutBlog';
import Loading from '../components/Loading';

import { loadCurrentPost } from '../actions';
import config from '../config';

const Post = ({ currentPost, match, load }) => {
  const [post, setPost] = useState(currentPost);
  useEffect(() => {
    if (post.slug !== match.params.slug) {
      setPost(false);
      fetch(`${config.api}/posts/${match.params.slug}`)
        .then((res) => res.json())
        .then((json) => {
          setPost(json.data);
          load(json.data);
        })
        .catch(() => {});
    }
  });


  if (!post) return <Loading />;

  return (
    <LayoutBlog>
      <main className="post">
        <div className="wrapper">
          <TemplatePost post={post} />
        </div>
      </main>
    </LayoutBlog>
  );
};

Post.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  currentPost: PropTypes.objectOf().isRequired,
  load: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentPost: state.currentPost,
});

const mapDispatchToProps = {
  load: loadCurrentPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
