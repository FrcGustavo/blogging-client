import dotenv from 'dotenv';

dotenv.config();

const config = {
  srv: {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    logPrefix: process.env.LOG_PREFIX || 'app',
  },
};

export default config;
