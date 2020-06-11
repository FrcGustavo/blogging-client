import { Route } from 'express';

import PostsRouter from './router';
import PostsController from './controller';

const RouterPosts = (app) => {
  const controller = new PostsController(url);
  const router = new PostsRouter(app, Route, controller);
  router.loadRoutes();
};

export default RouterPosts;