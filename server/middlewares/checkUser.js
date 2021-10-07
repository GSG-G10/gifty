const { verify } = require('jsonwebtoken');

const {
  env: { SECRET_KEY },
} = process;

module.exports = (req, res, next) => {
  const {
    cookies: { access_token: accessToken },
  } = req;
  if (accessToken) {
    verify(accessToken, SECRET_KEY, (err, value) => {
      if (err) {
        res
          .status(401)
          .json(
            {
              error: 'Authentication Error', message: 'You are not registered yet',
            },
          );
      } else {
        req.userId = value.userId;
        next();
      }
    });
  } else {
    res
      .status(401)
      .json({ error: 'Authentication Error', message: 'You are not registered yet' });
  }
};
