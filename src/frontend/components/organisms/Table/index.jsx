import React from 'react';
import PropTypes from 'prop-types';

import THead from '../../mulecules/THead';
import TBody from '../../mulecules/TBody';

import { STable } from './styles';

const Table = ({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
}) => (
  <STable {...getTableProps()}>
    <THead
      headerGroups={headerGroups}
    />
    <TBody
      getTableBodyProps={getTableBodyProps}
      rows={rows}
      prepareRow={prepareRow}
    />
  </STable>
);

Table.propTypes = {
  getTableProps: PropTypes.objectOf().isRequired,
  getTableBodyProps: PropTypes.objectOf().isRequired,
  headerGroups: PropTypes.objectOf().isRequired,
  rows: PropTypes.objectOf().isRequired,
  prepareRow: PropTypes.objectOf().isRequired,
};

export default Table;
