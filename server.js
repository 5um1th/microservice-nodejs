var app    = require('./index');
var config = require('./config');
var bole   = require('bole');
var amqp   = require('amqp');

bole.output({level: "debug", stream: process.stdout});
var log = bole("server");
log.info({env: process.env.NODE_ENV}, "Server process starting");

console.log(config.rabbitmqURL)
var rabbitmq = amqp.createConnection(config.rabitmqURL);
rabbitmq.on('ready', function (callback) {
  log.info("connected to: " + config.rabbitmqURL);
});

app.listen(config.express.port, config.express.ip, function(error) {
  if(error) {
    log.error("Unable to listen for connections", error);
    process.exit(10);
  }
  log.info("Server is listening on http://" + 
    config.express.ip + ":" + config.express.port);
});

module.exports = app;
