/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import showdown from 'showdown';
import { connect } from 'react-redux';

import WrapperBoard from '../../components/mulecules/WrapperBoard';

import './styles.scss';

const converter = new showdown.Converter();

const InputForm = ({
  label, type, id, name, placeholder, value, onChange,
}) => (
  <div className="input-form">
    <label htmlFor={id}>
      {label}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const BoardPostsEdit = ({ editPost }) => {
  const [post, setPost] = useState(editPost);
  const [preview, setPreview] = useState(converter.makeHtml(post.body));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(post);
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
        <header className="edit-post">
          <input type="submit" value="Guardar" />
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
        </header>
        <section className="editor">
          <div className="input">
            <textarea name="body" onChange={handleChange}>
              {post.body}
            </textarea>
          </div>
          <div className="output post-content" dangerouslySetInnerHTML={{ __html: preview }} />
        </section>
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
