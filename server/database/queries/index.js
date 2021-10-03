const getProductsQuiery = require('./getProductsQuiery');
const getUserData = require('./getUserData');
const getUserId = require('./getUserId');
const addUserQuery = require('./addUserQuery');
const getProductQuery = require('./getProductQuery');
const deleteProductQuery = require('./deleteProductQuery');
const addToCart = require('./addtToCart');

module.exports = {
    addUserQuery,
    getProductQuery,
    deleteProductQuery,
    getProductsQuiery,
    getUserData,
    getUserId,
    addToCart
};