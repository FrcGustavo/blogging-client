/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import Blog from '@/pages/Blog';
import Post from '@/pages/Post';
import Login from '@/pages/Login';
import TempleteBoard from '@/templates/TempleteBoard';
import Components from '@/pages/Components';
import ProtectedRoute from './ProtectedRoute';

import '&/assets/styles/main.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/blog" component={Blog} />
      <ProtectedRoute exact path="/board" component={TempleteBoard} />
      <ProtectedRoute exact path="/board/posts" component={TempleteBoard} />
      <ProtectedRoute exact path="/board/posts/new" component={TempleteBoard} />
      <ProtectedRoute exact path="/board/posts/edit/:slug" component={TempleteBoard} />
      <ProtectedRoute exact path="/board/users" component={TempleteBoard} />
      <Route exact path="/components" component={Components} />
      <Route exact path="/:slug" component={Post} />
    </Switch>
  </BrowserRouter>
);

export default App;