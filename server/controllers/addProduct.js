const { addProductQuery } = require('../database/queries');

module.exports = (req, res, next) => {
  const {
    name, catagory, price, description, img,
  } = req.body;

  addProductQuery(name, catagory, price, description, img)
    .then(() => res.status(201).json({ msg: 'Product Added Succesfully' }))
    .catch((err) => next(err));
};
