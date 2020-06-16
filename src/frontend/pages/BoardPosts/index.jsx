import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

import WrapperBoard from '../../components/mulecules/WrapperBoard';
import HeaderOfWrapperBoard from '../../components/mulecules/HeaderOfWrapperBoard';
import TemplateTableBoard from '../../components/templates/TemplateTableBoard';
import LoadingRing from '../../components/atoms/LoadingRing';
import TableActions from '../../components/mulecules/TableActions';

import { loadEditPost } from '../../actions';

import config from '../../config';

import './styles.scss';

const BoardPosts = ({ token, history, loadPost }) => {
  const [posts, setPosts] = useState(false);

  const handleEdit = (slug) => {
    const post = posts.filter((current) => current.slug === slug && slug)[0];

    loadPost(post);
    history.push(`/board/posts/edit/${slug}`);
  };
  const handleDelete = () => {};

  const columns = [
    { Header: 'Titulo', accessor: 'title' },
    { Header: 'Me gusta', accessor: 'likes' },
    { Header: 'Compartido', accessor: 'timeShared' },
    {
      Header: 'Estado',
      accessor: 'isPublic',
      Cell: ({ value }) => (value ? 'Publicado' : 'Borrador'),
    },
    {
      Header: '',
      accessor: 'slug',
      Cell: (cell) => (
        <TableActions
          handleEdit={() => handleEdit(cell.value)}
          handleDelete={handleDelete}
        />
      ),
    },
  ];

  useEffect(() => {
    axios({
      url: `${config.api}/posts/author`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => setPosts(res.data.body.posts));
  }, []);

  return (
    <WrapperBoard>
      <HeaderOfWrapperBoard
        label="Nuevo Post"
        url="/board/posts/new"
      />
      {
        !posts ? <LoadingRing /> : <div className="scroll"><TemplateTableBoard data={posts} columns={columns} /></div>
      }
    </WrapperBoard>
  );
};

BoardPosts.propTypes = {
  token: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  loadPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.user.token,
});

const mapDispatchToProps = {
  loadPost: loadEditPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardPosts);
