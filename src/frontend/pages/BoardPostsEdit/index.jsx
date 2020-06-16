/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import WrapperBoard from '../../components/mulecules/WrapperBoard';
import FormPost from '../../components/templates/FormPost';

import './styles.scss';


const BoardPostsEdit = ({ editPost }) => (
  <WrapperBoard display="block">
    <FormPost currentPost={editPost} />
  </WrapperBoard>
);

BoardPostsEdit.propTypes = {
  editPost: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  editPost: state.editPost,
});

export default connect(mapStateToProps, null)(BoardPostsEdit);
