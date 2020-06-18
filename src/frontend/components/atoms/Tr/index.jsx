import React from 'react';
import PropTypes from 'prop-types';

import { STr, Td } from './styles';

const Tr = ({ rows, prepareRow }) => {
  const renderCells = (row) => row.cells.map((cell) => (
    <Td {...cell.getCellProps()}>
      {cell.render('Cell')}
    </Td>
  ));

  const renderRows = () => rows.map((row) => {
    prepareRow(row);
    return (
      <STr {...row.getRowProps()}>
        {renderCells(row)}
      </STr>
    );
  });

  return renderRows();
};

Tr.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  rows: PropTypes.any.isRequired,
  prepareRow: PropTypes.func.isRequired,
};

export default Tr;
