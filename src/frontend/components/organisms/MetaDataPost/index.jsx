import React from 'react';
import PropTypes from 'prop-types';

import InputForm from '../../mulecules/InputForm';
import PostFormActions from '../../mulecules/PostFormActions';
import { Header } from './styles';

const MetaDataPost = ({ post, handleChange }) => (
  <Header>
    <PostFormActions handleChange={handleChange} />
    <InputForm
      label="Titulo*"
      type="text"
      id="title"
      name="title"
      placeholder="Escribe un titulo"
      value={post.title}
      onChange={handleChange}
    />
    <InputForm
      label="Url*"
      type="text"
      id="slug"
      name="slug"
      placeholder="Escribe una url personalizada"
      value={post.slug}
      onChange={handleChange}
    />
    <InputForm
      label="Descripción*"
      type="text"
      id="description"
      name="description"
      placeholder="Escribe una description"
      value={post.description}
      onChange={handleChange}
    />
    <InputForm
      label="Keywords*"
      type="text"
      id="keywords"
      name="keywords"
      placeholder="Escribe un las palabras clave"
      value={post.keywords}
      onChange={handleChange}
    />
  </Header>
);

MetaDataPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MetaDataPost;
