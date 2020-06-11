import express from 'express';
import logger from 'morgan';
import path from 'path';

import BlogController from './controllers/BlogController';
import loadConfigDev from './utils/loadConfigDev';
import loadConfigProd from './utils/loadConfigProd';
import config from './config';
import { info } from './utils/debug';

import RouterPosts from './componenets/posts';

const controller = new BlogController();
const app = express();
const router = express.Router();

RouterPosts(app);

router.get('/', controller.home);
router.get('/login', controller.login);
router.get('/blog', controller.blog);
router.get('/components', controller.components);
router.get('/board', controller.board);
router.get('/board/posts', controller.board);
router.get('/board/posts/new', controller.board);
router.get('/board/posts/edit/:slug', controller.board);
router.get('/board/users', controller.board);
router.get('/:slug', controller.post);

if (config.srv.nodeEnv === 'development') {
  info('Load development config');
  loadConfigDev(app);
} else {
  loadConfigProd(app);
}

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev', { stream: { write: (msg) => info(msg) } }));
app.use(router);

app.listen(config.srv.port, () => {
  info(`srv is listening on http://localhost:${config.srv.port}`);
});
