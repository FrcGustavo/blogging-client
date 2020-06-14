import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const WrapperBoard = ({ children }) => (
  <Container>{children}</Container>
);

WrapperBoard.propTypes = {
  children: PropTypes.element.isRequired,
};

export default WrapperBoard;
