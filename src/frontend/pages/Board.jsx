/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import config from '../config';

const Board = () => {
  const [post, setPost] = useState({ cover: 'Jajajatl' });

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(post);
    fetch(`${config.api}/posts`, {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(() => {})// console.log(data))
      .catch();
  };

  const handleChange = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div>
        <header>Home</header>
      </div>
      <main className="new-post">
        <form action="" onSubmit={handleSubmit}>
          <div className="input-form">
            <label htmlFor="title">Titulo:</label>
            <input type="text" name="title" id="title" onChange={handleChange} />
          </div>
          <div className="input-form">
            <label htmlFor="slug">slug:</label>
            <input type="text" name="slug" id="slug" onChange={handleChange} />
          </div>
          <div className="input-form">
            <label htmlFor="keywords">Keyword:</label>
            <input type="text" name="keywords" id="keywords" onChange={handleChange} />
          </div>
          <div className="input-form">
            <label htmlFor="description">Description:</label>
            <input type="text" name="description" id="description" onChange={handleChange} />
          </div>
          <div className="editor">
            <h2>Editor</h2>
            <div>
              <textarea name="body" onChange={handleChange} />
            </div>
            <div>
              <section className="post-content" dangerouslySetInnerHTML={{ __html: post.body }} />
            </div>
          </div>
          <input type="submit" value="Guardar" />
        </form>
      </main>
      <footer>
        this is the footer
      </footer>
    </>
  );
};

export default Board;
