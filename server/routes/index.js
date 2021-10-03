const router = require('express').Router();
const { addUser } = require('../controllers');

router.post('/signup', addUser);

const getProduct = require('../controllers');

router.get('/product/:productId', getProduct);

module.exports = router;
