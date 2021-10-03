const connection = require('../connection');

const deleteProductQuery = (productId) => connection.query('DELETE FROM cart WHERE product_id = $1', [productId]);

module.exports = deleteProductQuery;
