'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Schema = new Schema({
  product_name:String,
  price:String,
  mrpRate:String,
  category:String,
  subCategory:String,
  packType:String,
  size:String,
  product_img:Buffer,
  description:String,
  returnDay:String,
  availableStatus:String,
  discount:String,
  discountType:String,
  specialDiscount:String,
  specialDiscountType:String,
  compnayName:String,
  modelNo:String
});

module.exports = mongoose.model('Products', Schema);