const router = require('express').Router();

const {
  setCookies,
  checkUser,
} = require('../middlewares');

const {
  deleteProduct,
  getProducts,
  getUserCart,
  getProduct,
  addComment,
  addToCart,
  getComments,
  addUser,
  signIn,
} = require('../controllers');

router.delete('/deletePorduct/:productId', checkUser, deleteProduct);
router.get('/userProducts', checkUser, getUserCart);
router.post('/addToCart', checkUser, addToCart);
router.get('/product/:productId', getProduct);
router.post('/signup', addUser, setCookies);
router.post('/signin', signIn, setCookies);
router.get('/products', getProducts);
router.get('/comments/:productId', getComments);
router.post('/addComment', checkUser, addComment);

module.exports = router;
