const getProductQuery = require('../database/queries');

module.exports = (req, res) => {
  const { productId } = req.params;
  getProductQuery(productId).then((data) => res.json(data.rows));
};
