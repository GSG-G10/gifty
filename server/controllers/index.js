const addUser = require('./addUser');
const getProduct = require('./getProduct');
const getProducts = require('./getProducts');
const signIn = require('./signIn');
const deleteProduct = require('./deleteProduct');
const addToCart = require('./addToCart');
const getUserCart = require('./getUserCart');



module.exports = {
    addUser,
    getProduct,
    getProducts,
    deleteProduct,
    getUserCart,
    signIn,
    addToCart
};