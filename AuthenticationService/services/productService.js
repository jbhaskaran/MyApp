function productService() {

}

productService.prototype.getProducts = function () {

    var products = [
        {
            name : "prod 1",
            type: "gift card"
        },
        {
            name : "prod 2",
            type: "clothing"
        }
    ]
    return products;
};

module.exports = new productService();
