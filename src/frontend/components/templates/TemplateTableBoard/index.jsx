import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';

import Table from '../../organisms/Table';

const useFunctionMemo = (object) => useMemo(
  () => object,
  [],
);

const TemplateTableBoard = ({ data, columns }) => {
  const tableData = useFunctionMemo(data);
  const tableColumns = useFunctionMemo(columns);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns: tableColumns, data: tableData });

  return (
    <Table
      getTableProps={getTableProps}
      getTableBodyProps={getTableBodyProps}
      headerGroups={headerGroups}
      rows={rows}
      prepareRow={prepareRow}
    />
  );
};

TemplateTableBoard.propTypes = {
  data: PropTypes.objectOf().isRequired,
  columns: PropTypes.objectOf().isRequired,
};

export default TemplateTableBoard;
