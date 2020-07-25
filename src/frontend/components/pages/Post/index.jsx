import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TemplatePost from '../../templates/TemplatePost';
import Loading from '../../atoms/Loading';
import Footer from '../../organisms/Footer';

import { loadCurrentPost } from '../../../actions';
import config from '../../../config';

import './styles.scss';

const Post = ({ currentPost, match, load }) => {
  const [post, setPost] = useState(currentPost);
  useEffect(() => {
    if (post.slug !== match.params.slug) {
      setPost(false);
      fetch(`${config.api}/posts/${match.params.slug}`)
        .then((res) => res.json())
        .then((json) => {
          setPost(json.body);
          load(json.body);
        })
        .catch(() => {});
    }
  }, []);

  if (!post) return <Loading />;

  return (
    <>
      <main className="post">
        <div className="wrapper">
          <TemplatePost post={post} />
        </div>
      </main>
      <Footer />
    </>
  );
};

Post.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  currentPost: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      user: PropTypes.string.isRequired,
      userCover: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      views: PropTypes.number.isRequired,
      timeShared: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
    }),
  ]).isRequired,
  load: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentPost: state.currentPost,
});

const mapDispatchToProps = {
  load: loadCurrentPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
