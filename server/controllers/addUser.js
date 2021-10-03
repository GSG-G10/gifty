const { addUserQuery } = require('../database/queries');
const { hashPassword } = require('../utils/validations');
const { signupSchema } = require('../utils/validations');

const addUser = (req, res) => {
  const { username, email, password } = req.body;
  const { error } = signupSchema.validate(req.body);

  if (error) {
    res.status(400).json({ msg: error.details[0].message });
  } else {
    hashPassword(password).then((hashed) => addUserQuery(username, email, hashed)
      .then(() => res.json({ msg: 'Success' }))
      .catch((err) => res.json({ msg: err })));
  }
};

module.exports = addUser;
