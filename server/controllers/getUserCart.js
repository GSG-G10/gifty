const { getUserCartQuery } = require('../database/queries');

module.exports = (req, res, next) => {
  const userId = req;
  getUserCartQuery(userId)
    .then((result) => res.json(result.rows))
    .catch((err) => next(err));
};
