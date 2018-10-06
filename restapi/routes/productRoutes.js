'use strict';

module.exports = function(app) {
    var product = require('../controllers/productController');
    app.route('/products')
        .get(product.products)
        .post(product.add);
    app.route('/product/:category')
        .get(product.productsbyCategory);
        // app.route('/product/subCategory?category&subCategory')
        // .get(product.productsbyCategory)
    app.route('/products/:productId')
        .get(product.getproductById)
        .put(product.update)
        .delete(product.delete);

        //Order Routes
        var order = require('../controllers/orderController');
        app.route('/orders')
        .get(order.getAllOrder)
        .post(order.add);
        app.route('/orderDetails/:orderId')
        .get(order.getDetailsOrderById)
        app.route('/orders/:orderId')
        .put(order.cancelOrderById)
};