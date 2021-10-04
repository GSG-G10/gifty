const { getProductsQuery } = require('../database/queries');

module.exports = (req, res, next) => {
  getProductsQuery()
    .then((result) => res.json(result.rows[0]))
    .catch((err) => next(err));
};
