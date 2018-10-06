var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./restapi/models/productModel'),
  
  Order = require('./restapi/models/orderModel'),
  bodyParser = require('body-parser');
  var cors = require('cors');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/newstore', { useMongoClient: true }).then(data=>console.log("connected"+data),error=>console.log(error));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./restapi/routes/productRoutes');
routes(app);

app.use(cors());
 
// app.use(function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
//    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//    next();
// });
 
app.use(function(req, res,next) {
  res.header("Access-Control-Allow-Origin", "*.*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
 //// res.status(404).send({url: req.originalUrl + ' not found'})
  next()
});

app.listen(port);

console.log('Online Store -  RESTful web services with Nodejs started on: ' + port);
