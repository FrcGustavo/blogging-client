import React from 'react';

import HeaderOfWrapperBoard from '../../components/mulecules/HeaderOfWrapperBoard';
import { Conatiner } from './styles';

const BoardUsers = () => (
  <Conatiner>
    <HeaderOfWrapperBoard
      label="Nuevo Usuario"
      url="/board/users/new"
    />
    <h1>Usuarios</h1>
  </Conatiner>
);

export default BoardUsers;
