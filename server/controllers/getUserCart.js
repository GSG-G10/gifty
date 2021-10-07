const { getUserCartQuery } = require('../database/queries');

module.exports = (req, res, next) => {
  const { userId } = req;
<<<<<<< HEAD

=======
>>>>>>> 102cfb0935d252ae42160a1e8ff3efeb09b3f2d2
  getUserCartQuery(userId)
    .then(({ rows }) => res.json({ data: rows }))
    .catch((err) => next(err));
};
