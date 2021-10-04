const { addToCart } = require('../database/queries');

module.exports = (req, res) => {
    const { quantity, product_id } = req.body;
    const { userId } = req

    addToCart(quantity, userId, product_id).catch(err => next(err));
}