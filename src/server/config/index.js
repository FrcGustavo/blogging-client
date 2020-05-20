import dotenv from 'dotenv';

dotenv.config();

const config = {
  srv: {
    mode: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    logPrefix: process.env.LOG_PREFIX || 'app',
  },
};

export default config;
