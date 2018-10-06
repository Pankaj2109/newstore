'use strict';

var mongoose = require('mongoose'),
    Order = mongoose.model('Orders');

    exports.add = function(req, res) {
        var new_order = new Order(req.body);
        new_order.save(function(err, order) {
          if (err)
            res.send(err);
          res.json(order);
        });
    };
    exports.getAllOrder = function(req, res) {
        Order.find({},null, {sort: {orderDate: 1}}, function(err, order) {
            if (err)
              res.send(err);
            res.json(order);
          });
    };
    exports.getDetailsOrderById = function(req, res) {
        Order.findById({_id: req.params.orderId}, function(err, order) {
            if (err)
              res.send(err);
            res.json(order);
          });
    };
    exports.cancelOrderById = function(req, res) {
        Order.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, product) {
            if (err)
              res.send(err);
            res.json(product);
          });
    };
      