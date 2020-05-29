import express from 'express';

import loadConfigDev from './utils/loadConfigDev';
import loadConfigProd from './utils/loadConfigProd';
import config from './config';
import { info } from './utils/debug';

const app = express();

if (config.srv.env === 'development') {
  info('Load development config');
  loadConfigDev(app);
} else {
  loadConfigProd(app);
}

app.listen(config.srv.port, () => {
  info(`srv is listening on http://localhost:${config.srv.port}`);
});
