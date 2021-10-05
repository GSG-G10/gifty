const router = require('express').Router();

const {
  setCookies,
  checkUser,
} = require('../middlewares');

const {
  deleteProduct,
  getProducts,
  getUserCart,
  addProduct,
  getProduct,
  addToCart,
  addUser,
  signIn,
} = require('../controllers');

router.delete('/deletePorduct/:productId', checkUser, deleteProduct);
router.get('/userProducts', checkUser, getUserCart);
router.post('/addToCart', checkUser, addToCart);
router.get('/product/:productId', getProduct);
router.post('/signup', addUser, setCookies);
router.post('/signin', signIn, setCookies);
router.post('/addProduct', addProduct);
router.get('/products', getProducts);

module.exports = router;
