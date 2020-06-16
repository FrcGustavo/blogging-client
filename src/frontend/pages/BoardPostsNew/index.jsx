import React, { useState } from 'react';
import showdown from 'showdown';

import WrapperBoard from '../../components/mulecules/WrapperBoard';
import MetaDataPost from '../../components/organisms/MetaDataPost';

const converter = new showdown.Converter();

const BoardPostsNew = () => {
  const [post, setPost] = useState({
    title: '',
    slug: '',
    description: '',
    keywords: '',
  });

  const [preview, setPreview] = useState(converter.makeHtml(post.body));


  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === 'body') {
      setPreview(converter.makeHtml(post.body));
      console.log(preview);
    }
  };

  return (
    <WrapperBoard>
      <form>
        <MetaDataPost post={post} handleChange={handleChange} />
      </form>
    </WrapperBoard>
  );
};

export default BoardPostsNew;
