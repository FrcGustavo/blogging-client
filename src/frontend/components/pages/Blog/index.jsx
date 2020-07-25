/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loading from '../../atoms/Loading';
import FirstPost from '../../mulecules/FirstPost';
import ListOfPosts from '../../organisms/ListOfPosts';
import Footer from '../../organisms/Footer';

import { loadBlog } from '../../../actions';
import config from '../../../config';

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
    <>
      <main className="blog">
        <section className="main-blog">
          <div className="wrapper">
            <FirstPost post={posts[0]} />
          </div>
        </section>
        <section className="grid-posts">
          <div className="wrapper">
            <ListOfPosts posts={posts} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

const Post = PropTypes.shape({
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}).isRequired;

Blog.propTypes = {
  blog: PropTypes.PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(Post),
  ]).isRequired,
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
