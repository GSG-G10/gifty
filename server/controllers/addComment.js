const { addCommentQuery } = require('../database/queries');

module.exports = (req, res, next) => {
  const { description, productId } = req.body;
  const { userId } = req;
  addCommentQuery(description, userId, productId)
    .then(() => res.status(201).json({ msg: 'Comment Added Succesfully' }))
    .catch((err) => next(err));
};
