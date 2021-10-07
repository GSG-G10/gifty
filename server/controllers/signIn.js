const { comparePassword, signInSchema } = require('../utils/validations');
const { getUserData } = require('../database/queries');

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  const { error } = signInSchema.validate({ password, email });

  if (error) {
    res
      .status(400)
      .json({ Error: error.details[0].message });
  } else {
    getUserData(email)
      .then(({ rows }) => {
        if (!rows.length) {
          res.status(400).json({ Error: 'You\'ve entered an invalid email' });
        } else {
          const { password: hashedPassword } = rows[0];
          comparePassword(password, hashedPassword, (err, isMatch) => {
            if (isMatch) {
              req.userId = rows[0].id;
              next();
            } else {
              res.status(400).json({ Error: 'You\'ve entered a wrong password' });
            }
          });
        }
      });
  }
};
