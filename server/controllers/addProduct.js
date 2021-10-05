const { addProductQuery } = require('../database/queries');

module.exports = (req, res, next) => {
  const {
    name, catagory, price, description, img,
  } = req.body;
  const { userRole } = req;
  if (userRole === 'seller') {
    addProductQuery(name, catagory, price, description, img)
      .then(() => res.status(201).json({ msg: 'Product Added Succesfully' }))
      .catch((err) => next(err));
  } else {
    res.json({ msg: 'You are not a seller' });
  }
};
