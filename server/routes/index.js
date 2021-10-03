const router = require('express').Router();
const { addUser } = require('../controllers');
const { getProducts, getProduct } = require('../controllers');

router.get('/products', getProducts);
router.get('/product/:productId', getProduct);
router.post('/signup', addUser, setCookies);

module.exports = router;
