var express = require('express');
var config  = require('./config');
var path    = require('path');
var app     = express();
var server  = require('http').createServer(app);

app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.use(function(req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

module.exports = server;
