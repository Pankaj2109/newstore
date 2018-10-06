'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Schema = new Schema({

  orderDate: { type: String },
  userName:    { type: String},
  totalAmount: {type: String},
  deliveryDate:{type:String},
  discountAmt:{type:String},
  specialDiscount:{type:String},
  orderDetails:[{
      product_Id:String,
      category:String,
      subCategory:String,
      price:String,
      quantity:String,
      discount:String,
      discountType:String,
      specialDiscount:String,
      specialDiscountType:String,
      product_img:Buffer,
      orderStatus:String,
      returnDate:String,
      description:String,
      product_Name:String,
      compnayName:String,
      modelNo:String,
      mrpRate:String
  }],
  deliveryStatus:String,
  paymentType:String,
  paymentStatus:String
});

module.exports = mongoose.model('Orders', Schema);