const connection = require('../connection');

module.exports = (productId) => connection.query('SELECT * FROM product WHERE id=$1', [productId]);
