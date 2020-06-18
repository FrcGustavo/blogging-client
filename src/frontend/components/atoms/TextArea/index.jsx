import React from 'react';
import PropTypes from 'prop-types';

import { Textarea, InputText } from './styles';

const TextArea = ({ name, value, handleChange }) => (
  <InputText>
    <Textarea
      name={name}
      defaultValue={value}
      onChange={handleChange}
    />
  </InputText>
);

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextArea;
