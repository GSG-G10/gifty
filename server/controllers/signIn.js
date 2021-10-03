const { getUserData } = require('../database/queries');
const { comparePassword, signInSchema } = require('../utils/validations');

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  const { error } = signInSchema.validate({ password, email });
  if (error) {
    res.status(400).json({ Error: 'error' });
  } else {
    getUserData(email).then(({ rows }) => {
      if (!rows.length) {
        res.json({ Error: 'You\'ve entered an invalid email' });
      } else {
        const { password: hashedPassword } = rows[0];
        comparePassword(password, hashedPassword, (err, isMatch) => {
          if (isMatch) {
            next();
          } else {
            res.json({ Error: 'You\'ve entered a wrong password' });
          }
        });
      }
    });
  }
};
