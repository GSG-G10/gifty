const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const cookies = req.cookies.access_token;
  if (cookies) {
    jwt.verify(cookies, process.env.secretKey, (err, value) => {
      if (err) {
        next(err);
      } else {
        res.username = value;
        next();
      }
    });
  } else {
    res.redirect('/login-register');
  }
};
