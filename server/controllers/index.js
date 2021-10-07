const getUserCart = require('./getUserCart');
const getComments = require('./getComments');
const getProducts = require('./getProducts');
const addComment = require('./addComment');
const getProduct = require('./getProduct');
const addToCart = require('./addToCart');
const addUser = require('./addUser');
const signIn = require('./signIn');
const logOut = require('./logOut');
const deleteProduct = require('./deleteProduct');

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
  logOut,
};
