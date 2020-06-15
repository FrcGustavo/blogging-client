import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const WrapperBoard = ({ children, display }) => (
  <Container display={display}>{children}</Container>
);

WrapperBoard.propTypes = {
  children: PropTypes.element.isRequired,
  display: PropTypes.string.isRequired,
};

export default WrapperBoard;
