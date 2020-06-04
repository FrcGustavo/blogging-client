import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Post from '../pages/Post';
import Login from '../pages/Login';
import Components from '../pages/Components';

import '../assets/styles/main.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/components" component={Components} />
      <Route exact path="/:slug" component={Post} />
    </Switch>
  </BrowserRouter>
);

export default App;
