const router = require('express').Router();

const { checkUser } = require('../middlewares');
const { getProduct, getProducts, deleteProduct } = require('../controllers');

router.get('/products', getProducts);
router.get('/product/:productId', getProduct);
router.delete('/deletePorduct/:productId', checkUser, deleteProduct);

module.exports = router;
