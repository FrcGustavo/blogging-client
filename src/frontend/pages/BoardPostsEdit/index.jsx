/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import showdown from 'showdown';
import { connect } from 'react-redux';

import WrapperBoard from '../../components/mulecules/WrapperBoard';
import MetaDataPost from '../../components/organisms/MetaDataPost';
import Editor from '../../components/organisms/Editor';

import './styles.scss';

const converter = new showdown.Converter();

const BoardPostsEdit = ({ editPost }) => {
  const [post, setPost] = useState(editPost);
  const [preview, setPreview] = useState(converter.makeHtml(post.body));

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === 'body') {
      setPreview(converter.makeHtml(post.body));
    }
  };

  if (!post) return <div>Cargando...</div>;
  return (
    <WrapperBoard display="block">
      <form onSubmit={handleSubmit}>
        <MetaDataPost post={post} handleChange={handleChange} />
        <Editor body={post.body} preview={preview} handleChange={handleChange} />
      </form>
    </WrapperBoard>
  );
};

BoardPostsEdit.propTypes = {
  editPost: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  editPost: state.editPost,
});

export default connect(mapStateToProps, null)(BoardPostsEdit);
