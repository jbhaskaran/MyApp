var express = require('express');
var router = express.Router();
var productService = require('../services/productService');

router.get('/', function (req, res) {
    var prods = productService.getProducts();
    return res.json(prods);
});

module.exports = router;