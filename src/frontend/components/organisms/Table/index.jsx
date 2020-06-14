import React from 'react';

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
      headerGroups
    />
    <TBody
      getTableBodyProps
      rows
      prepareRow
    />
  </table>
);

export default Table;
