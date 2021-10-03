const router = require('express').Router();

const { getProduct, deleteProduct } = require('../controllers');
const { checkUser } = require('../middlewares');

router.get('/product/:productId', getProduct);
router.delete('/deletePorduct/:productId', checkUser, deleteProduct);
module.exports = router;
