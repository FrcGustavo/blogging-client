import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

import WrapperBoard from '../../components/mulecules/WrapperBoard';
import HeaderOfWrapperBoard from '../../components/mulecules/HeaderOfWrapperBoard';
import TemplateTableBoard from '../../components/templates/TemplateTableBoard';
import LoadingRing from '../../components/atoms/LoadingRing';
// import Button from '../../components/atoms/Button';
import TableActions from '../../components/mulecules/TableActions';

import config from '../../config';

import './styles.scss';

const BoardPosts = ({ token, history }) => {
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
      Header: '',
      accessor: 'slug',
      Cell: (cell) => (<TableActions handleEdit={() => history.push(`/board/posts/edit/${cell.value}`)} handleDelete={() => {}} />),
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
};

const mapStateToProps = (state) => ({
  token: state.user.token,
});

export default connect(mapStateToProps, null)(BoardPosts);
