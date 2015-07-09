var express  = require('express');
var config   = require('./config');
var path     = require('path');
var app      = express();
var server   = require('http').createServer(app);
var info     = require('./lib/controllers/info');
var sender   = require('./lib/services/sender');
var receiver = require('./lib/services/receiver');
var services = require('./services');

var mongodb = require( 'mongodb' ); 
var MongoClient = mongodb.MongoClient;
var assert = require('assert');

app.get('/send', function (req, res) {
  res.send('This page is sending data\n');
  sender.publishMessage('testexchange', 'This is a test !', '');
});

app.get('/receive', function (req, res) {
  res.send('This page is receiving data\n');
  receiver.subscribeMessage('testexchange', '', function(message) {
    console.log('Received message: ' + message.data.toString('utf-8'));
  });
});

app.get('/info', function (req,res) {
  services.getMongoDbConnection(function(error, db) {
    var document = {name:"Alex", title:"About MongoDB"};
    db.collection('test').insert(document, function(err, records) {
      if (err) throw err;
      console.log("Record added");
    });
  });
  res.send(info.showInfo());
});

app.use(function(req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

module.exports = server;
