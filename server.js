var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');
app.use(middleware.addHeaders);
app.listen(3000, function(){
  console.log('listening on port 3000')
})
