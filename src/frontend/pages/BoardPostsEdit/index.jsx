import React from 'react';

import PostModel from '../../models/PostModel';

import './styles.scss';

const BoardPostsEdit = () => {
  const post = new PostModel({});
  return (
    <div className="board-posts">
      <div className="board-posts-form">
        <form action="">
          <div className="input-form">
            <input type="text" placeholder="Titulo" value={post.title} />
          </div>
          <div className="input-form">
            <input type="text" placeholder="Slug" />
          </div>
          <div className="input-form">
            <input type="text" placeholder="Description" />
          </div>
          <div className="input-form">
            <input type="text" placeholder="KeyWords" />
          </div>
          <div className="editor">
            <div className="input">
              <textarea name="body" id="" cols="30" rows="10">
                {post.body}
              </textarea>
            </div>
            <div className="output">
              {post.body}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BoardPostsEdit;
