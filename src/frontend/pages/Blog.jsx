import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loading from '../components/Loading';
import LayoutBlog from '../components/LayoutBlog';
import FirtsPost from '../components/mulecules/FirtsPost';
import ListOfPosts from '../components/organisms/ListOfPosts';

// import { loadBlog } from '../actions';
// import config from '../config';

const Blog = ({ blog }) => {
  const [posts] = useState(blog);

  if (!posts) return <Loading />;

  return (
    <LayoutBlog>
      <main className="blog">
        <section className="main-blog">
          <div className="wrapper">
            <FirtsPost post={posts[0]} />
          </div>
        </section>
        <section className="grid-posts">
          <div className="wrapper">
            <ListOfPosts posts={posts} />
          </div>
        </section>
      </main>
    </LayoutBlog>
  );
};

Blog.propTypes = {
  blog: PropTypes.objectOf().isRequired,
// loadBlog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    blog: state.blog,
  }
);
/*
mapDispatchToProps = {
  loadBlog
}; */

export default connect(mapStateToProps, null)(Blog);
