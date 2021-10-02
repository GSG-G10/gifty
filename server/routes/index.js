const router = require('express').Router();

const getProduct = require('../controllers');

router.get('/product/:productId', getProduct);

module.exports = router;
