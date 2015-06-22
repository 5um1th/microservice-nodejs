var express = require('express');
var config  = require('./config');
var path    = require('path');
var app     = express();
var server  = require('http').createServer(app);
var info    = require('./lib/controllers/info');
var sender  = require('./lib/services/sender');
var receiver = require('./lib/services/receiver');

app.get('/send', function (req, res) {
  res.send('This page is sending data');
  sender.publishMessage('testing', 'This is a test! ', '');
});

app.get('/receive', function (req, res) {
  res.send('This page is receiving data');
  receiver.subscribeMessage('testing', 'bla', '')
});

app.get('/info', function (req,res) {
  res.send(info.showInfo());
});

app.use(function(req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

module.exports = server;
