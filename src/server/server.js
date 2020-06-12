import express from 'express';
import logger from 'morgan';
import path from 'path';
import passport from 'passport';
import cookieParser from 'cookie-parser';

import BlogController from './controllers/BlogController';
import loadConfigDev from './utils/loadConfigDev';
import loadConfigProd from './utils/loadConfigProd';
import config from './config';
import { info } from './utils/debug';

import RouterPosts from './componenets/posts';

import './utils/auth/strategies/basic';

const controller = new BlogController();
const app = express();
const router = express.Router();

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
RouterPosts(app);

app.post('/auth/login', async (req, res, next) => {
  passport.authenticate('basic', (error, data) => {
    try {
      if (error || !data) {
        next(error);
      }

      req.login(data, { session: false }, async (err) => {
        if (err) {
          next(err);
        }

        const { token, ...user } = data;

        res.cookie('token', token, {
          httpOnly: !(config.nodeEnv === 'development'),
          secure: !(config.nodeEnv === 'development'),
        });

        res.status(200).json(user);
      });
    } catch (err) {
      next(err);
    }
  })(req, res, next);
});

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
