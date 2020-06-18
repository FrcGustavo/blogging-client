import React from 'react';
import PropTypes from 'prop-types';

import Tr from '../../atoms/Tr';

const TBody = ({
  getTableBodyProps,
  rows,
  prepareRow,
}) => (
  <tbody {...getTableBodyProps()}>
    <Tr
      rows={rows}
      prepareRow={prepareRow}
    />
  </tbody>
);

TBody.propTypes = {
  getTableBodyProps: PropTypes.objectOf().isRequired,
  rows: PropTypes.objectOf().isRequired,
  prepareRow: PropTypes.objectOf().isRequired,
};

export default TBody;
