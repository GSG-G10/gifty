const { getProductsQuiery } = require('../database/queries');

module.exports = (req, res) => {
    getProductsQuiery().then(result => console.log(result.rows)).catch(err => res.json(err));
}