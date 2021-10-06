const connection = require('../connection');

module.exports = (description, userId, productId) => connection.query('INSERT INTO comments ( description, user_id, product_id) VALUES ($1, $2, $3);', [description, userId, productId]);
