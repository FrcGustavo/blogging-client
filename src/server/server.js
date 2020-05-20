import express from 'express';
import config from './config';
import { info } from './utils/debug';

const app = express();

app.listen(config.srv.port, () => {
  info(`srv is listening on http://localhost:${config.srv.port}`);
});
