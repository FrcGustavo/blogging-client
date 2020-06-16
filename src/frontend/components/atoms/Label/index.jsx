import React from 'react';

import LabelPropTypes from '../../../props/LabelPropTypes';

const Label = ({
  id, label, children,
}) => (
  <label htmlFor={id}>
    {label}
    {children}
  </label>
);

Label.propTypes = LabelPropTypes;

export default Label;
