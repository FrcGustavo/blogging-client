/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import Blog from '@/pages/Blog';
import Post from '@/pages/Post';
import LayoutBlog from '@/templates/LayoutBlog';

import '&/assets/styles/main.scss';

const App = () => (
  <BrowserRouter>
    <LayoutBlog>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/:slug" component={Post} />
      </Switch>
    </LayoutBlog>
  </BrowserRouter>
);

export default App;
