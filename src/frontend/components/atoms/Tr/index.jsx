import React from 'react';
import PropTypes from 'prop-types';

const Tr = ({ rows, prepareRow }) => {
  const renderCells = (row) => row.cells.map((cell) => (
    <td {...cell.getCellProps()}>
      {cell.render('Cell')}
    </td>
  ));

  const renderRows = () => rows.map((row) => {
    prepareRow(row);
    return (
      <tr {...row.getRowProps()}>
        {renderCells(row)}
      </tr>
    );
  });

  return renderRows();
};

Tr.propTypes = {
  rows: PropTypes.objectOf().isRequired,
  prepareRow: PropTypes.objectOf().isRequired,
};

export default Tr;
