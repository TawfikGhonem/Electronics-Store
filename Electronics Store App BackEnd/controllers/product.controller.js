const { products } = require('../models/product.model');

// getting products from product model
function getProducts(req, res) {
    res.json(products());
}

module.exports = {
    getProducts
}