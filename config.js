var config     = module.exports;
var currentENV = process.env.NODE_ENV || "development";
var PRODUCTION = process.env.NODE_ENV === "production";
var TEST       = process.env.NODE_ENV === "test";
var S          = require('string'); 

config.express = {
  port: process.env.EXPRESS_PORT || 3000,
  ip: "127.0.0.1"
};

config.rabbitmq = {
  port: process.env.RABBITMQ_PORT || 5672,
  host: process.env.RABBITMQ_HOST || "0.0.0.0", 
  login: process.env.RABBITMQ_USER || "guest",
  password: process.env.RABBITMQ_PASSWORD || "guest"
};

// only when using Docker
if (S(config.rabbitmq.port).contains("tcp://")) {
    config.rabbitmq.host = S(config.rabbitmq.port).between("tcp://",":").s
    config.rabbitmq.port = S(config.rabbitmq.port).chompLeft("tcp://").s
    config.rabbitmq.port = S(config.rabbitmq.port).between(':').s
  }

if (PRODUCTION) {
  config.express.ip = "0.0.0.0";
  config.express.port = process.env.EXPRESS_PORT || 80;
}

if (TEST) {
  config.express.port = process.env.EXPRESS_PORT || 4657;
}

config.rabbitmqURL = "amqp://" + config.rabbitmq.login + ":" + config.rabbitmq.password +
  "@" + config.rabbitmq.host + ":" + config.rabbitmq.port;

config.currentENV = currentENV;
