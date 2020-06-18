import React from 'react';
import PropTypes from 'prop-types';

const THead = ({ headerGroups }) => (
  <thead>
    {headerGroups.map((headerGroup) => (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => (
          <th {...column.getHeaderProps()}>{column.render('Header')}</th>
        ))}
      </tr>
    ))}
  </thead>
);

THead.propTypes = {
  headerGroups: PropTypes.objectOf().isRequired,
};

export default THead;
