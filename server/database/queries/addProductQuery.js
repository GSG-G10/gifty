const connection = require('../connection');

module.exports = (name, catagory, price, description, img) => connection.query('INSERT INTO product (name,catagory,price,description,img) VALUES ($1,$2,$3,$4,$5);', [name, catagory, price, description, img]);
