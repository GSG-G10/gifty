const { addToCart } = require('../database/queries');

module.exports = (req, res, next) => {
    const { quantity, product_id } = req.body;
    const { userId } = req

    addToCart(quantity, userId, product_id)
        .then(() => res.status(201).json({ msg: "Product Added Succesfully" }))
        .catch(err => next(err));
}