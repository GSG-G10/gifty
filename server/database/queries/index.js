const getProductsQuery = require('./getProductsQuery');
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
  getProductsQuery,
  getUserCartQuery,
  getUserData,
  getUserId,
};
