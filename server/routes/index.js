const router = require('express').Router();

const { getProducts } = require('../controllers')

router.get('/products', getProducts);

module.exports = router;