const joi = require('joi');

const signupSchema = joi.object({
  username: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().alphanum().min(6).required(),
  confirmPassword: joi.ref('password'),
  role: joi.required(),
});

module.exports = signupSchema;
