import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import showdown from 'showdown';
import axios from 'axios';

import PostModel from '../../models/PostModel';

import config from '../../config';

import './styles.scss';

const converter = new showdown.Converter();

const BoardPostsEdit = ({ match }) => {
  console.log(match);

  const [post, setPost] = useState(false);
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (!post) {
      axios.get(`${config.api}/posts/${match.params.slug}`)
        .then((res) => setPost(new PostModel(res.data.body)));
    }
  });

  const handleChange = (e) => {
    post.body = e.target.value;
    setPreview(converter.makeHtml(post.body));
  };

  console.log('POST', post);
  if (!post) return <div>Cargando...</div>;
  return (
    <div className="board-posts">
      <div className="board-posts-form">
        <form action="">
          <div className="input-form">
            <input type="text" placeholder="Titulo" value={post.title} />
          </div>
          <div className="input-form">
            <input type="text" placeholder="Slug" value={post.slug} />
          </div>
          <div className="input-form">
            <input type="text" placeholder="Description" value={post.description} />
          </div>
          <div className="input-form">
            <input type="text" placeholder="KeyWords" value={post.keywords} />
          </div>
          <div className="editor">
            <div className="input">
              <textarea name="body" onChange={handleChange}>
                {post.body}
              </textarea>
            </div>
            <div className="output post-content" dangerouslySetInnerHTML={{ __html: preview }} />
          </div>
        </form>
      </div>
    </div>
  );
};

BoardPostsEdit.propTypes = {
  match: PropTypes.objectOf().isRequired,
};

export default BoardPostsEdit;
