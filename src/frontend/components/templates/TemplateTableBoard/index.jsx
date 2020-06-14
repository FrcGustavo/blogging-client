import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';

const useFunctionMemo = (object) => {
  return useMemo(
    () => object,
    [],
  );
};

const TemplateTableBoard = ({ data, columns }) => {
  const tableData = useFunctionMemo(data);
  const tableColumns = useFunctionMemo(columns);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ tableColumns, tableData });

  return (
    <Table 
      getTableProps
      getTableBodyProps
      headerGroups
      rows
      prepareRow
    />
  );
};

TemplateTableBoard.propTypes = {
  data: PropTypes.objectOf().isRequired,
  columns: PropTypes.objectOf().isRequired,
};

export default TemplateTable;

const TableHead = () => {

};
