const { addUserQuery } = require('../database/queries');
const { hashPassword, signupSchema } = require('../utils/validations');

const addUser = (req, res, next) => {
  const { error, value: { username, email, password } } = signupSchema.validate(req.body);
  if (error) {
    res.status(400).json({ msg: error.details[0].message });
  } else {
    hashPassword(password).then((hashed) => addUserQuery(username, email, hashed)
      .then(({ rowCount }) => (rowCount === 1 ? next() : res.json({ msg: 'Something Wrong!' })))
      .catch((err) => res.json({ msg: err })));
  }
};

module.exports = addUser;
