import React, { useState } from 'react';

import WrapperBoard from '../../components/mulecules/WrapperBoard';
import HeaderOfWrapperBoard from '../../components/mulecules/HeaderOfWrapperBoard';
import TemplateTableBoard from '../../components/templates/TemplateTableBoard';
import LoadingRing from '../../components/atoms/LoadingRing';

const BoardUsers = () => {
  const [users] = useState(false);
  const data = [
    {
      name: 'Hola',
    },
    {
      name: 'Mundo',
    },
  ];

  const columns = [
    {
      Header: 'Saludo',
      accessor: 'name',
    },
  ];

  return (
    <WrapperBoard>
      <HeaderOfWrapperBoard
        label="Nuevo Usuario"
        url="/board/users/new"
      />
      {
        !users ? <LoadingRing /> : <TemplateTableBoard data={data} columns={columns} />
      }
    </WrapperBoard>
  );
};

export default BoardUsers;
