const { getUserCartQuery } = require('../database/queries');

module.exports = (req, res, next) => {
  const { userId } = req;
  getUserCartQuery(userId)
    .then(({ rows }) => res.json({ data: rows }))
    .catch((err) => next(err));
};
