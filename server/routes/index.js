const router = require('express').Router();

const { setCookies, checkUser } = require('../middlewares');
const {
  getUserCart,
  getProducts,
  getProduct,
  signIn,
  deleteProduct,
  addUser,
} = require('../controllers');

router.get('/products', getProducts);
router.get('/product/:productId', getProduct);
router.get('/UserProducts', checkUser, getUserCart);
router.post('/signin', signIn, setCookies);
router.post('/signup', addUser, setCookies);
router.delete('/deletePorduct/:productId', checkUser, deleteProduct);

module.exports = router;
