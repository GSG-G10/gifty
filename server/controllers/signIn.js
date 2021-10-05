const { comparePassword, signInSchema } = require('../utils/validations');
const { getUserData } = require('../database/queries');

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  signInSchema.validateAsync({ password, email }, { abortEarly: false })
    .then(() => getUserData(email))
    .then(({ rows }) => {
      if (!rows.length) {
        res.json({ Error: 'You\'ve entered an invalid email' });
      } else {
        const { password: hashedPassword } = rows[0];
        comparePassword(password, hashedPassword, (err, isMatch) => {
          if (isMatch) {
            req.userId = rows[0].id;
            req.userRole = rows[0].role;
            next();
          } else {
            res.json({ Error: 'You\'ve entered a wrong password' });
          }
        });
      }
    })
    .catch((error) => res.status(400).json({ msg: error.details[0].message }));
};
