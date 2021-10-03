const connection = require('../connection');

module.exports = (email) => connection.query('SELECT id FROM users WHERE email=$1', [email]);
