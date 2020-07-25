import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loading from '../../atoms/Loading';
import MyProfile from '../../mulecules/MyProfile';
import MainPost from '../../mulecules/MainPost';

import PostModel from '../../../models/PostModel';

import { loadHome } from '../../../actions';
import config from '../../../config';

import './styles.scss';

const Home = ({ mainPost, profileImg, loadPost }) => {
  const [post, setPost] = useState(!mainPost ? mainPost : new PostModel(mainPost));

  useEffect(() => {
    if (!post) {
      fetch(`${config.api}/posts?limit=1`)
        .then((res) => res.json())
        .then((json) => {
          setPost(json.body.posts[0]);
          loadPost(json.body.posts[0]);
        }).catch(() => {});
    }
  }, []);

  if (!post) return <Loading />;

  return (
    <>
      <main className="home">
        <div className="wrapper">
          <section className="home-profile">
            <MyProfile profileImg={profileImg} />
          </section>
        </div>
        <div className="wrapper">
          <section className="home-post">
            <MainPost post={post} />
          </section>
        </div>
      </main>
    </>
  );
};

Home.defaultProps = {};

Home.propTypes = {
  mainPost: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ]).isRequired,
  profileImg: PropTypes.string.isRequired,
  loadPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  mainPost: state.mainPost,
  profileImg: state.profileImg,
});

const mapDispatchToProps = {
  loadPost: loadHome,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
