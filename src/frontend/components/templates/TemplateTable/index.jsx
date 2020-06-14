/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';

import Table from '../../organisms/Table';
import Button from '../../atoms/Button';

const TemplateTable = ({ posts }) => {
  const data = React.useMemo(
    () => posts,
    [],
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Titulo',
        accessor: 'title',
      },
      {
        Header: 'Me gusta',
        accessor: 'likes',
      },
      {
        Header: 'Compartido',
        accessor: 'timeShared',
      },
      {
        Header: 'Estado',
        accessor: 'isPublic',
        Cell: ({ value }) => (value ? 'Publicado' : 'Borrador'),
      },
      {
        Header: 'aa',
        accessor: 'slug',
        Cell: (cell) => <Button to={`/board/posts/edit/${cell.value}`}>Editar</Button>,
      },
    ],
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });
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

TemplateTable.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
};

export default TemplateTable;
