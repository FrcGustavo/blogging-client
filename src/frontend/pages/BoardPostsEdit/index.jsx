import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import WrapperBoard from '../../components/mulecules/WrapperBoard';
import FormPost from '../../components/templates/FormPost';

import './styles.scss';


const BoardPostsEdit = ({ editPost, token }) => (
  <WrapperBoard display="block">
    <FormPost currentPost={editPost} token={token} />
  </WrapperBoard>
);

BoardPostsEdit.propTypes = {
  editPost: PropTypes.objectOf(PropTypes.string).isRequired,
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  editPost: state.editPost,
  token: state.user.token,
});

export default connect(mapStateToProps, null)(BoardPostsEdit);
