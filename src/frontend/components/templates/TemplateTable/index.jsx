/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';

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
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TemplateTable.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
};

export default TemplateTable;
