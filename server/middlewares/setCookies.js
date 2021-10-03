const { sign } = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { userId } = req;
  const { secretKey } = process.env;
  
  sign({ role: 'user', userId }, secretKey, (err, token) => {
    if (err) {
      next(err);
    } else {
      res.cookie('access_token', token, { httpOnly: true, secure: true } )
      .json({ msg: 'cookies sent successfully' })
    }
  });
};
