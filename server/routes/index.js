const router = require('express').Router();

const { setCookies, checkUser } = require('../middlewares');
const {
    getUserCart,
    getProducts,
    getProduct,
    signIn,
    deleteProduct,
    addUser,
    addToCart
} = require('../controllers');

router.get('/products', getProducts);
router.get('/product/:productId', getProduct);
router.get('/userProducts', checkUser, getUserCart);
router.post('/signin', signIn, setCookies);
router.post('/signup', addUser, setCookies);
router.delete('/deletePorduct/:productId', checkUser, deleteProduct);
router.post("/addToCart", checkUser, addToCart);

module.exports = router;