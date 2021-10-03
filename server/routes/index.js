const router = require('express').Router();

const { getProducts, getProduct } = require('../controllers')

router.get('/products', getProducts);

router.get('/product/:productId', getProduct);

module.exports = router;