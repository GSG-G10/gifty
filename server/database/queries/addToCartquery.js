const connection = require('../connection');

module.exports = (quantity, userId, productId) => connection.query('INSERT INTO cart ( quantity, user_id, product_id) VALUES ($1, $2, $3);', [quantity, userId, productId]);
