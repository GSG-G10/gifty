const router = require('express').Router();
const { addUser } = require('../controllers');

router.post('/signup', addUser);

module.exports = router;
