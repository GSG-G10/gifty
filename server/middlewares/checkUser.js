const { verify } = require('jsonwebtoken');

const {
  env: { secretKey },
} = process;

module.exports = (req, res, next) => {
  const {
    cookies: { access_token: accessToken },
  } = req;
  if (accessToken) {
    verify(accessToken, secretKey, (err, value) => {
      if (err) {
        res
          .status(401)
          .json(
            {
              error: 'Authentication Error', message: 'You are not registered yet',
            },
          );
      } else {
        console.log(1);
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
