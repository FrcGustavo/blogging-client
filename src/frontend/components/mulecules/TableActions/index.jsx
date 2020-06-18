import React from 'react';
import PropTypes from 'prop-types';

import IconDelete from '../../atoms/IconDelete';
import IconEdit from '../../atoms/IconEdit';

import { Button } from './styles';

const TableActions = ({ handleEdit, handleDelete }) => (
  <div>
    <Button type="button" edit onClick={handleEdit}>
      <IconEdit />
    </Button>
    <Button type="button" onClick={handleDelete}>
      <IconDelete />
    </Button>
  </div>
);

TableActions.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TableActions;
