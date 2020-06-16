import React from 'react';

import InputPropTypes from '../../../props/InputPropTypes'

const Input = ({
    type, ide, name, placeholder, value, onChange,
  }) = (
  <input
    type={type}
    id={id}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

Input.propTypes = InputPropTypes;

export default Input;
