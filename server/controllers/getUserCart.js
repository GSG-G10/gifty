const { getUserCartQuery } = require('../database/queries');

module.exports = (req, res) => {
  const userId = req;
  getUserCartQuery(userId)
    .then((result) => res.json(result.rows))
    .catch((err) => res.json(err));
};
