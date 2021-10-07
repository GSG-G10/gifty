const { hashPassword, signupSchema } = require('../utils/validations');
const { addUserQuery, getUserId } = require('../database/queries');

const addUser = (req, res, next) => {
  const {
    email, password, username, confirmPassword, role,
  } = req.body;
  const { error } = signupSchema.validate({
    email, password, username, confirmPassword, role,
  });
  if (error) {
    res
      .status(400)
      .json({ Error: error.details[0].message });
  } else {
    hashPassword(password)
      .then((hashed) => addUserQuery(username, email, hashed)
        .then(({ rowCount }) => {
          if (rowCount === 1) {
            getUserId(email)
              .then(({ rows }) => {
                req.userId = rows[0].id;
                next();
              });
          } else {
            res.status(400).json({ Error: 'Something Wrong!' });
          }
        })
        .catch(() => res.status(400).json({ Error: 'Email or Username is already exists!' })));
  }
};

module.exports = addUser;
