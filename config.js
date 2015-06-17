var config     = module.exports;
var currentENV = process.env.NODE_ENV || "development";
var PRODUCTION = process.env.NODE_ENV === "production";
var TEST       = process.env.NODE_ENV === "test";

config.express = {
  port: process.env.EXPRESS_PORT || 3000,
  ip: "127.0.0.1"
};

config.rabbitmq = {
  port: process.env.RABBITMQ_PORT || 5672,
  host: process.env.RABBITMQ_HOST || "localhost", 
  login: process.env.RABBITMQ_USER || "guest",
  password: process.env.RABBITMQ_PASSWORD || "guest",
};

if (PRODUCTION) {
  config.express.ip = "0.0.0.0";
  config.express.port = process.env.EXPRESS_PORT || 80;
}

if (TEST) {
  config.express.port = process.env.EXPRESS_PORT || 4657;
}

config.rabbitmqURL = "amqp://" + config.rabbitmq.login + ":" + config.rabbitmq.password 
  + "@" + config.rabbitmq.host + ":" + config.rabbitmq.port;

config.currentENV = currentENV;
