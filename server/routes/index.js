const router = require('express').Router();
const { getProduct } = require('../controllers');
const { addUser } = require('../controllers');

router.get('/product/:productId', getProduct);
router.post('/signup', addUser, setCookies);

module.exports = router;
