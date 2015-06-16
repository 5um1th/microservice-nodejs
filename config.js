var config     = module.exports;
var currentENV = process.env.NODE_ENV || "development";
var PRODUCTION = process.env.NODE_ENV === "production";
var TEST       = process.env.NODE_ENV === "test";

config.express = {
  port: process.env.EXPRESS_PORT || 3000,
  ip: "127.0.0.1"
};

if (PRODUCTION) {
  config.express.ip = "0.0.0.0";
  config.express.port = "80";
}

if (TEST) {
  config.express.port = 4567;
}

config.currentENV = currentENV;
console.log(config.currentENV)
