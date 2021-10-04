const { deleteProductQuery } = require('../database/queries');

const deleteProduct = (req, res) => {
  const { productId } = req.params;
  const { userId } = req;

  deleteProductQuery(productId, userId)
    .then(({ rowCount }) => (
      rowCount > 0
        ? res.json({ msg: 'Product Deleted Successfully' })
        : res.json({ msg: 'Product cannot deleted, something wrong' })
    ))
    .catch((err) => res.json({ msg: err }));
};

module.exports = deleteProduct;
