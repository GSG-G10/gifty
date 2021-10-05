const { getProductsQuery } = require('../database/queries');

module.exports = (req, res, next) => {
  getProductsQuery()
    .then((result) => res.json(result.rows))
    .catch((err) => next(err));
};
