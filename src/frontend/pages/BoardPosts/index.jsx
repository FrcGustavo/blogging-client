import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WrapperBoard from '../../components/mulecules/WrapperBoard';
import HeaderOfWrapperBoard from '../../components/mulecules/HeaderOfWrapperBoard';
import TemplateTableBoard from '../../components/templates/TemplateTableBoard';
import LoadingRing from '../../components/atoms/LoadingRing';
import Button from '../../components/atoms/Button';

import config from '../../config';

import './styles.scss';

const BoardPosts = () => {
  const [posts, setPosts] = useState(false);
  const columns = [
    {
      Header: 'Titulo',
      accessor: 'title',
    },
    {
      Header: 'Me gusta',
      accessor: 'likes',
    },
    {
      Header: 'Compartido',
      accessor: 'timeShared',
    },
    {
      Header: 'Estado',
      accessor: 'isPublic',
      Cell: ({ value }) => (value ? 'Publicado' : 'Borrador'),
    },
    {
      Header: 'aa',
      accessor: 'slug',
      Cell: (cell) => <Button to={`/board/posts/edit/${cell.value}`}>Editar</Button>,
    },
  ];

  useEffect(() => {
    axios.get(`${config.domain}/api/posts`)
      .then((res) => setPosts(res.data.posts));
  }, []);

  return (
    <WrapperBoard>
      <HeaderOfWrapperBoard
        label="Nuevo Post"
        url="/board/posts/new"
      />
      {
        !posts ? <LoadingRing /> : <TemplateTableBoard data={posts} columns={columns} />
      }
    </WrapperBoard>
  );
};

export default BoardPosts;
