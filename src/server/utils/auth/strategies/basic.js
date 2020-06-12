const passport = require("passport");
const { BasicStrategy } = require("passport-http");
const axios = require("axios");

require("dotenv").config();

passport.use(
  new BasicStrategy(async function (email, password, cb) {
    try {
      const { data, status } = await axios({
        url: `${process.env.API}/api/auth/sign-in`,
        method: "post",
        auth: {
          password,
          username: email
        },
      });

      if (!data || status !== 200) {
        throw new Error();
      }

      return cb(null, data);
    } catch (error) {
      cb(error);
    }
  })
);