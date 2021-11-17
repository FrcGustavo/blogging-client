import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllPosts } from '@apis/apiRestV2';

const GhostPostsPage = () => {
  const [posts, handlePosts] = useState([]);
  useEffect(() => {
    getAllPosts().then((resBody) => {
      handlePosts(resBody);
    });
  }, []);

  return (
    <div>
      {posts.map(({ uuid, title }) => (
        <div key={uuid}>
          <p>{title}</p>
          <Link href={'/ghost/posts/' + uuid}>
            <a>Editar</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GhostPostsPage;
