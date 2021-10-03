const router = require('express').Router();

const { getProduct } = require('../controllers');
const { deleteProduct } = require('../controllers');

router.get('/product/:productId', getProduct);
router.delete('/deletePorduct/:productId', deleteProduct);
module.exports = router;
