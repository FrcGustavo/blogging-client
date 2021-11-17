import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getOnePost } from '@apis/apiRestV2';

const GhostPostEditPage = () => {
  const router = useRouter();
  const [post, handlePost] = useState({});
  const { uuid } = router.query;

  useEffect(() => {
    if (uuid === undefined) {
      console.log(uuid);
      return;
    }

    getOnePost(uuid as string).then((resBody) => {
      handlePost(resBody);
    });
  }, [uuid]);

  return <div>{JSON.stringify(post)}</div>;
};

export default GhostPostEditPage;
