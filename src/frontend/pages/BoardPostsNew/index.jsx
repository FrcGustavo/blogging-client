import React from 'react';

import WrapperBoard from '../../components/mulecules/WrapperBoard';
import FormPost from '../../components/templates/FormPost';

const BoardPostsNew = () => {
  const post = {
    title: '',
    slug: '',
    description: '',
    keywords: '',
    body: '',
  };

  return (
    <WrapperBoard display="block">
      <FormPost currentPost={post} />
    </WrapperBoard>
  );
};

export default BoardPostsNew;
