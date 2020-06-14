import React from 'react';

import TemplateTableBoard from '../../components/templates/TemplateTableBoard';
import HeaderOfWrapperBoard from '../../components/mulecules/HeaderOfWrapperBoard';
import { Conatiner } from './styles';

const BoardUsers = () => (
  <Conatiner>
    <HeaderOfWrapperBoard
      label="Nuevo Usuario"
      url="/board/users/new"
    />
    <TemplateTableBoard data={[]} columns={[]} />
  </Conatiner>
);

export default BoardUsers;
