import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loading from '../components/Loading';
import Header from '../components/Header';
import MyProfile from '../components/mulecules/MyProfile';
import MainPost from '../components/mulecules/MainPost';

const Home = ({ mainPost }) => {
  const [post] = useState(mainPost);

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
};

const mapStateToProps = (state) => ({
  mainPost: state.mainPost,
});

export default connect(mapStateToProps, null)(Home);
