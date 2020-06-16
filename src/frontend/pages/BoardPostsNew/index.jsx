import React, { useState } from 'react';

import WrapperBoard from '../../components/mulecules/WrapperBoard';
import MetaDataPost from '../../components/organisms/MetaDataPost';

const BoardPostsNew = () => {
  const [post] = useState({
    title: '',
    slug: '',
    description: '',
    keywords: '',
  });
  const handleChange = () => {};

  return (
    <WrapperBoard>
      <form>
        <MetaDataPost post={post} handleChange={handleChange} />
      </form>
    </WrapperBoard>
  );
};

export default BoardPostsNew;
