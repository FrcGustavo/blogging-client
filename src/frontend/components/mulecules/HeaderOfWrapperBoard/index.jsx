import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../atoms/Button';
import { Header } from './styles';

const HeaderOfWrapperBoard = ({ url, label }) => (
  <Header>
    <Button to={url}>{label}</Button>
  </Header>
);

HeaderOfWrapperBoard.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default HeaderOfWrapperBoard;
