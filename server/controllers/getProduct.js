const { getProductQuery } = require('../database/queries');

module.exports = (req, res, next) => {
  const { productId } = req.params;

  if (productId > 0) {
    getProductQuery(productId)
      .then((data) => res.json(data.rows))
      .catch((err) => next(err));
  } else {
    res
      .status(400)
      .json({ error: 'Bad Request' });
  }
};
