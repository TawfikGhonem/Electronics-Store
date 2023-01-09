const db = require('../data/database');

// using sql query to get all products from database
function products() {
    return db.prepare('SELECT * FROM products;').all();
}

module.exports = { products };