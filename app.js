var express = require('express');
var app = express();
var bodyParser = require('body-parser');

/* Middlewares */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Routes */
var routes = require('./routes/route')(app);

/* Server Stuff */

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("API Server Listening on Port " + port);
});