const deleteProduct = require('./deleteProduct');
const getUserCart = require('./getUserCart');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');
const addToCart = require('./addToCart');
const addUser = require('./addUser');
const signIn = require('./signIn');
const getComments = require('./getComments');
const addComment = require('./addComment');

module.exports = {
  deleteProduct,
  getUserCart,
  getProducts,
  getComments,
  addComment,
  getProduct,
  addToCart,
  addUser,
  signIn,
};
