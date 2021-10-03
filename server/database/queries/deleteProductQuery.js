const connection = require('../connection');

const deleteProductQuery = (productId, userId) => connection.query('DELETE FROM cart WHERE product_id = $1 AND user_id = $2', [productId, userId]);

module.exports = deleteProductQuery;
