const { addToCartQuery } = require('../database/queries');

module.exports = (req, res, next) => {
  const { quantity, productId } = req.body;
  const { userId } = req;

  addToCartQuery(quantity, userId, productId)
    .then(() => res.status(201).json({ msg: 'Product Added Succesfully' }))
    .catch((err) => next(err));
};
