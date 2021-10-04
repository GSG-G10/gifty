const connection = require('../connection');

module.exports = (userId) => connection.query('SELECT cart.quantity, product.name, product.price, product.img FROM cart INNER JOIN product ON cart.product_id=product.id WHERE cart.user_id=$1', [userId]);
