const connection = require('../connection');

module.exports = (productId) => connection.query('SELECT comments.description, users.username FROM comments INNER JOIN users ON users.id = comments.user_id  WHERE product_id=$1 ORDER BY comments.id DESC;', [productId]);
