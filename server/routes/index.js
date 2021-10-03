const router = require('express').Router();

const { setCookies } = require('../middlewares');
const { getProducts, getProduct, signIn } = require('../controllers');

router.get('/products', getProducts);
router.get('/product/:productId', getProduct);
router.post('/signin', signIn, setCookies);

module.exports = router;
