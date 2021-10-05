const { hashPassword, signupSchema } = require('../utils/validations');
const { addUserQuery, getUserId } = require('../database/queries');

const addUser = (req, res, next) => {
  const {
    username, email, password, userRole,
  } = req.body;
  signupSchema.validateAsync({
    username, email, password, userRole,
  }, { abortEarly: false })
    .then(() => hashPassword(password))
    .then((hashed) => addUserQuery(username, email, hashed, userRole))
    .then(() => getUserId(email))
    .then(({ rows }) => {
      req.userId = rows[0].id;
      req.userRole = userRole;
      next();
    })
    .catch(() => res.json({ msg: 'Email or Username is already exists!' }));
};

module.exports = addUser;
