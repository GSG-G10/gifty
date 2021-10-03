const connection = require('../connection');

module.exports = (email) => connection.query('SELECT password FROM users WHERE email=$1', [email]);
