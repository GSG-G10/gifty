const { deleteProductQuery } = require('../database/queries');

const deleteProduct = (req, res) => {
  const { productId } = req.params;
  deleteProductQuery(productId)
    .then(() => res.redirect('/UserProducts'))
    .catch((err) => res.json({ msg: err }));
};

module.exports = deleteProduct;
