import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const WrapperBoard = ({ children, display }) => (
  <Container display={display}>{children}</Container>
);

WrapperBoard.defaultProps = {
  display: 'grid',
};

WrapperBoard.propTypes = {
  children: PropTypes.element.isRequired,
  display: PropTypes.string,
};

export default WrapperBoard;
