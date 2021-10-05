const { getProductsQuery } = require('../database/queries');

module.exports = (req, res, next) => {
  getProductsQuery()
    .then(({ rows }) => res.json({ data: rows }))
    .catch((err) => next(err));
};
