import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Post from '../pages/Post';
import Components from '../pages/Components';

import '../assets/styles/main.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/components" component={Components} />
        <Route exact path="/:slug" component={Post} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
