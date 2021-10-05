const connection = require('../connection');

module.exports = (email) => connection.query('SELECT * FROM users WHERE email=$1', [email]);
