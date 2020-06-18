import React, { useState } from 'react';
import PropTypes from 'prop-types';
import showdown from 'showdown';
import axios from 'axios';

import MetaDataPost from '../../organisms/MetaDataPost';
import Editor from '../../organisms/Editor';

import config from '../../../config';

import { Form } from './styles';

const converter = new showdown.Converter();

const FormPost = ({ currentPost, token }) => {
  const [post, setPost] = useState(currentPost);
  const [preview, setPreview] = useState(converter.makeHtml(post.body));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post.id) {
      axios.patch(`${config.api}/posts/${post.slug}`, post, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(() => {
        window.location.href = '/board/posts';
      });
    } else {
      axios.post(`${config.api}/posts`, post, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(() => {
        window.location.href = '/board/posts';
      });
    }
  };

  const uploadImg = (file) => {
    const formData = new FormData();
    formData.append('cover', file);
    return axios.post(`${config.api}/uploads`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file && file.type === 'image/jpeg' && file.size < 2000000) {
        const image = uploadImg(file);
        image.then((res) => {
          const cover = res.data.body.secure_url;
          setPost({ ...post, cover });
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
  token: PropTypes.string.isRequired,
};

export default FormPost;
