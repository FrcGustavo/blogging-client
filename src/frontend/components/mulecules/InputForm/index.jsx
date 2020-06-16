import React from 'react';

import Label from '../../atoms/Label';
import Input from '../../atoms/Input';

import InputFormPropTypes from '../../../props/InputFormPropTypes';

const InputForm = ({
  label, type, id, name, placeholder, value, onChange,
}) => (
  <div>
    <Label id={id} label={label}>
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Label>
  </div>
);

InputForm.propTypes = InputFormPropTypes;

export default InputForm;
