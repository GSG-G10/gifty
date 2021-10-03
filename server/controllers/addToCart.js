const addToCart = require('../database/queries');

module.exports = (req, res) => {
    const { id, quantity, product_id } = req.body;
    const { userId } = req

    addToCart(id, quantity, userId, product_id).catch(err => res.json(err));
}