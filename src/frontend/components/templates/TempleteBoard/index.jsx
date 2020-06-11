import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HeaderBoard from '../../organisms/HeaderBoard';
import NavbarBoard from '../../organisms/NavbarBoard';
import Board from '../../../pages/Board';
import BoardPosts from '../../../pages/BoardPosts';
import BoardUsers from '../../../pages/BoardUsers';
import BoardPostsNew from '../../../pages/BoardPostsNew';
import BoardPostsEdit from '../../../pages/BoardPostsEdit';

const TemplateBoard = () => (
  <div className="board">
    <HeaderBoard />
    <NavbarBoard />
    <main className="">
      <Switch>
        <Route exact path="/board" component={Board} />
        <Route exact path="/board/posts" component={BoardPosts} />
        <Route exact path="/board/posts/new" component={BoardPostsNew} />
        <Route exact path="/board/posts/edit/:slug" component={BoardPostsEdit} />
        <Route exact path="/board/users" component={BoardUsers} />
      </Switch>
    </main>
  </div>
);

export default TemplateBoard;
