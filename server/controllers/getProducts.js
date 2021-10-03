const { getProductsQuiery } = require('../database/queries');

module.exports = (req, res) => {
    getProductsQuiery().then(result => res.json(result.rows)).catch(err => res.json(err));
}