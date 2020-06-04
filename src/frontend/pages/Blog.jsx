import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loading from '../components/Loading';
import LayoutBlog from '../components/LayoutBlog';
import FirtsPost from '../components/mulecules/FirtsPost';
import ListOfPosts from '../components/organisms/ListOfPosts';

import { loadBlog } from '../actions';
import config from '../config';

const Blog = ({ blog, load }) => {
  const [posts, setPosts] = useState(blog);

  useEffect(() => {
    if (!posts) {
      fetch(`${config.api}/posts/`)
        .then((res) => res.json())
        .then((json) => {
          setPosts(json.body.posts);
          load(json.body.posts);
        })
        .catch(() => {});
    }
  });

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
  load: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    blog: state.blog,
  }
);

const mapDispatchToProps = {
  load: loadBlog,
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
