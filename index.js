var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var port = 8080;

var app = express();

//app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

//Require the Router we defined in movies.js
var movies = require('./movies.js');

var products = require('./products.js');

//Use the Router on the sub route /movies
app.use('/movies', movies);

app.use('/ProductService', products);

app.listen(port, function(err){
    if (err) console.log(err);
    console.log(`Server listening on PORT ${port}`);
  }); 