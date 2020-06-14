import React from 'react';

import TemplateTableBoard from '../../components/templates/TemplateTableBoard';
import HeaderOfWrapperBoard from '../../components/mulecules/HeaderOfWrapperBoard';
import { Conatiner } from './styles';

const BoardUsers = () => {
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
    <Conatiner>
      <HeaderOfWrapperBoard
        label="Nuevo Usuario"
        url="/board/users/new"
      />
      <TemplateTableBoard data={data} columns={columns} />
    </Conatiner>
  );
};

export default BoardUsers;
