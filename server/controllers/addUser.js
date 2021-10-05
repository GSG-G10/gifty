const { hashPassword, signupSchema } = require('../utils/validations');
const { addUserQuery, getUserId } = require('../database/queries');

const addUser = (req, res, next) => {
  const {
    error, value: {
      username, email, password, userRole,
    },
  } = signupSchema.validate(req.body);

  if (error) {
    res
      .status(400)
      .json({ msg: error.details[0].message });
  } else {
    hashPassword(password)
      .then((hashed) => addUserQuery(username, email, hashed, userRole)
        .then(({ rowCount }) => {
          if (rowCount === 1) {
            getUserId(email)
              .then(({ rows }) => {
                req.userId = rows[0].id;
                req.userRole = userRole;
                next();
              });
          } else {
            res.json({ msg: 'Something Wrong!' });
          }
        })
        .catch((err) => next(err)));
  }
};

module.exports = addUser;
