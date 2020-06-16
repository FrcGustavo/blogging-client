import React, { useState } from 'react';
import showdown from 'showdown';

import WrapperBoard from '../../components/mulecules/WrapperBoard';
import MetaDataPost from '../../components/organisms/MetaDataPost';
import Editor from '../../components/organisms/Editor';

const converter = new showdown.Converter();

const BoardPostsNew = () => {
  const [post, setPost] = useState({
    title: '',
    slug: '',
    description: '',
    keywords: '',
    body: '',
  });

  const [preview, setPreview] = useState(converter.makeHtml(post.body));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file && file.type === 'image/jpeg' && file.size < 2000000) {
        setPost({
          ...post,
          cover: 'url',
        });
      }
    } else {
      setPost({
        ...post,
        [e.target.name]: e.target.value,
      });
    }
    if (e.target.name === 'body') {
      setPreview(converter.makeHtml(e.target.value));
    }
  };

  return (
    <WrapperBoard>
      <form onSubmit={handleSubmit}>
        <MetaDataPost post={post} handleChange={handleChange} />
        <Editor body={post.body} preview={preview} handleChange={handleChange} />
      </form>
    </WrapperBoard>
  );
};

export default BoardPostsNew;
