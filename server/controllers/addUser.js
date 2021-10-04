const { hashPassword, signupSchema } = require('../utils/validations');
const { addUserQuery, getUserId } = require('../database/queries');

const addUser = (req, res, next) => {
  const { error, value: { username, email, password } } = signupSchema.validate(req.body);

  if (error) {
    res
      .status(400)
      .json({ msg: error.details[0].message });
  } else {
    hashPassword(password)
      .then((hashed) => addUserQuery(username, email, hashed)
        .then(({ rowCount }) => {
          if (rowCount === 1) {
            getUserId(email)
              .then((result) => {
                req.userId = result.rows[0].id;
                next();
              });
          } else {
            res.json({ msg: 'Something Wrong!' });
          }
        })
        .catch((err) => res.json({ msg: err })));
  }
};

module.exports = addUser;
