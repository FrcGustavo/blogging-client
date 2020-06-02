import express from 'express';
import logger from 'morgan';

import BlogController from './controllers/BlogController';
import loadConfigDev from './utils/loadConfigDev';
import loadConfigProd from './utils/loadConfigProd';
import config from './config';
import { info } from './utils/debug';

const controller = new BlogController();
const app = express();

if (config.srv.nodeEnv === 'development') {
  info('Load development config');
  loadConfigDev(app);
} else {
  loadConfigProd(app);
}

app.use(logger('dev', { stream: { write: (msg) => info(msg) } }));
app.get('/', controller.home);
app.get('/blog', controller.blog);

app.listen(config.srv.port, () => {
  info(`srv is listening on http://localhost:${config.srv.port}`);
});
