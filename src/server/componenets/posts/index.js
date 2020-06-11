import { Router } from 'express';

import PostsRouter from './router';
import PostsController from './controller';

import config from '../../config';

const RouterPosts = (app) => {
  const controller = new PostsController(config.srv.api);
  const router = new PostsRouter(app, Router(), '/api/posts', controller, {});
  router.loadRoutes();
};

export default RouterPosts;
