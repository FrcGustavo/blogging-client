import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HeaderBoard from '../../organisms/HeaderBoard';
import NavbarBoard from '../../organisms/NavbarBoard';
import Board from '../../../pages/Board';
import BoardPosts from '../../../pages/BoardPosts';
import BoardUsers from '../../../pages/BoardUsers';

const TemplateBoard = () => (
  <div className="board">
    <HeaderBoard />
    <NavbarBoard />
    <main className="">
      <Switch>
        <Route exact path="/board" component={Board} />
        <Route exact path="/board/posts" component={BoardPosts} />
        <Route exact path="/board/users" component={BoardUsers} />
      </Switch>
    </main>
  </div>
);

export default TemplateBoard;
