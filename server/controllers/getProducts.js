const { getProductsQuery } = require('../database/queries');

module.exports = (req, res) => {
  getProductsQuery()
    .then((result) => res.json(result.rows[0]))
    .catch((err) => res.json(err));
};
