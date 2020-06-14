import React from 'react';
import PropTypes from 'prop-types';

import THead from '../../mulecules/THead';
import TBody from '../../mulecules/TBody';

const Table = ({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
}) => (
  <table {...getTableProps()}>
    <THead
      headerGroups={headerGroups}
    />
    <TBody
      getTableBodyProps={getTableBodyProps}
      rows={rows}
      prepareRow={prepareRow}
    />
  </table>
);

Table.propTypes = {
  getTableProps: PropTypes.objectOf().isRequired,
  getTableBodyProps: PropTypes.objectOf().isRequired,
  headerGroups: PropTypes.objectOf().isRequired,
  rows: PropTypes.objectOf().isRequired,
  prepareRow: PropTypes.objectOf().isRequired,
};

export default Table;
