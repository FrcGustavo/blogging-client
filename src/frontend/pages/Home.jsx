import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loading from '../components/Loading';
import Header from '../components/Header';
import MyProfile from '../components/mulecules/MyProfile';
import MainPost from '../components/mulecules/MainPost';

import { loadHome } from '../actions';
import config from '../config';

const Home = ({ mainPost, loadPost }) => {
  const [post, setPost] = useState(mainPost);

  useEffect(() => {
    if (!post) {
      fetch(`${config.api}/posts?limit=1`)
        .then((res) => res.json())
        .then((json) => {
          setPost(json.data.posts[0]);
          loadPost(json.data.posts[0]);
        }).catch(() => {});
    }
  });

  if (!post) return <Loading />;

  return (
    <>
      <Header />
      <main className="home">
        <div className="wrapper">
          <section className="home-profile">
            <MyProfile />
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
  mainPost: PropTypes.objectOf().isRequired,
  loadPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  mainPost: state.mainPost,
});

const mapDispatchToProps = {
  loadPost: loadHome,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
