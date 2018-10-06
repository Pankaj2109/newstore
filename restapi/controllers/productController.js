'use strict';

var mongoose = require('mongoose'),
    Product = mongoose.model('Products');

exports.products = function(req, res) {
  console.log('getProduct')
  Product.find({}, null, {sort: {category: 1}}, function(err, data) {
    if (err)
      res.send(err);

      console.log(data)
 //let a={'a':20,'name':'pankaj'}
      res.send(data);
  });
};

exports.productsbyCategory = function(req, res) {
  console.log(req.params)
  Product.find({category:req.params.category}, function(err, data) {
    if (err)
      res.send(err);
      console.log('err:'+err)
      console.log('data:'+data)
      res.json({data:data,message:'Product List by Category'});
  });
};


exports.productsbySubCategory = function(req, res) {
  console.log(req.query)
  Product.find({category:req.query.category,subCategory:req.query.subCategory}, function(err, data) {
    if (err)
      res.send(err);
      console.log('err:'+err)
      console.log('data:'+data)
      res.json({data:data,message:'Product List by  SubCategory'});
  });
};


exports.add = function(req, res) {
  var new_product = new Product(req.body);
  new_product.save(function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.getproductById = function(req, res) {
  console.log(req.params)
  Product.findById({_id: req.params.productId}, function(err, product) {
    if (err)
      res.send(err);
      res.json({data:product,message:'Product details by Id'});
  });
};

exports.update = function(req, res) {
  var id = mongoose.Types.ObjectId(req.query.productId);
  Product.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.delete = function(req, res) {
  var id = mongoose.Types.ObjectId(req.query.productId);
  Product.remove({
    _id: id
  }, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Product deleted successfully' });
  });
};
