import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ name, value, handleChange }) => (
  <textarea
    name={name}
    defaultValue={value}
    onChange={handleChange}
  />
);

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextArea;
