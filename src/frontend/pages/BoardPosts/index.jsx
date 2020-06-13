import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TemplateTable from '../../components/templates/TemplateTable';
import Button from '../../components/atoms/Button';
import LoadingRing from '../../components/atoms/LoadingRing';

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

  return (
    <div className="board-posts">
      <header className="board-posts-header">
        <Button to="/board/posts/new">Nuevo Post</Button>
      </header>
      <section className="board-posts-table">
        {
          !posts ? <LoadingRing /> : <TemplateTable posts={posts} />
        }
      </section>
    </div>
  );
};

export default BoardPosts;
