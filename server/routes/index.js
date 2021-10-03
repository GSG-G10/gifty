const router = require('express').Router();

const { getProduct, signIn } = require('../controllers');
const { setCookies } = require('../middlewares');

router.get('/product/:productId', getProduct);
router.post('/signin', signIn, setCookies);

module.exports = router;
