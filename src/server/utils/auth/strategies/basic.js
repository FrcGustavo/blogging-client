const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const axios = require('axios');

require('dotenv').config();

passport.use(
  new BasicStrategy((async (email, password, cb) => {
    try {
      const { data, status } = await axios({
        url: `${process.env.API}/auth/login`,
        method: 'post',
        auth: {
          password,
          username: email,
        },
      });

      if (!data || status !== 200) {
        throw new Error();
      }

      return cb(null, data);
    } catch (error) {
      return cb(error);
    }
  })),
);
