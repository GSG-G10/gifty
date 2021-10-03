const getProductsQuiery = require('./getProductsQuiery');
const getUserData = require('./getUserData');
const getUserId = require('./getUserId');
const addUserQuery = require('./addUserQuery');
const getProductQuery = require('./getProductQuery');
const deleteProductQuery = require('./deleteProductQuery');
const getUserCartQuery = require('./getUserCartQuery');

module.exports = {
  addUserQuery,
  getProductQuery,
  deleteProductQuery,
  getProductsQuiery,
  getUserCartQuery,
  getUserData,
  getUserId,
};
