import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Button from '../../components/atoms/Button';

import config from '../../config';

import './styles.scss';

const BoardPosts = () => {
  const [posts, setPosts] = useState(false);

  useEffect(() => {
    if (!posts) {
      axios.get(`${config.domain}/api/posts`)
        .then((res) => setPosts(res.data.posts));
    }
  });
  console.log(posts);

  return (
    <div className="board-posts">
      <header className="board-posts-header">
        <Button to="/board/posts/new">Nuevo Post</Button>
      </header>
    </div>
  );
};

export default BoardPosts;
