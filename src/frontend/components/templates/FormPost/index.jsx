import React, { useState } from 'react';
import PropTypes from 'prop-types';
import showdown from 'showdown';

import MetaDataPost from '../../organisms/MetaDataPost';
import Editor from '../../organisms/Editor';

import { Form } from './styles';

const converter = new showdown.Converter();

const FormPost = ({ currentPost }) => {
  const [post, setPost] = useState(currentPost);
  const [preview, setPreview] = useState(converter.makeHtml(post.body));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file && file.type === 'image/jpeg' && file.size < 2000000) {
        setPost({
          ...post,
          cover: 'url',
        });
      }
    } else {
      setPost({
        ...post,
        [e.target.name]: e.target.value,
      });
    }
    if (e.target.name === 'body') {
      setPreview(converter.makeHtml(e.target.value));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <MetaDataPost post={post} handleChange={handleChange} />
      <Editor body={post.body} preview={preview} handleChange={handleChange} />
    </Form>
  );
};

FormPost.propTypes = {
  currentPost: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default FormPost;
