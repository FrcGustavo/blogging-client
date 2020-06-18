import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import WrapperBoard from '../../components/mulecules/WrapperBoard';
import FormPost from '../../components/templates/FormPost';

const BoardPostsNew = ({ token }) => {
  const post = {
    title: '',
    slug: '',
    description: '',
    keywords: '',
    body: '',
  };

  return (
    <WrapperBoard display="block">
      <FormPost currentPost={post} token={token} />
    </WrapperBoard>
  );
};

BoardPostsNew.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.user.token,
});

export default connect(mapStateToProps, null)(BoardPostsNew);
