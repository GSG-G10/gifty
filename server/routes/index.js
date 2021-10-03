const router = require('express').Router();

const { checkUser } = require('../middlewares');
const {
  addUser, getProduct, getProducts, deleteProduct,
} = require('../controllers');

router.get('/products', getProducts);
router.get('/product/:productId', getProduct);
router.post('/signup', addUser);

router.delete('/deletePorduct/:productId', checkUser, deleteProduct);

module.exports = router;
