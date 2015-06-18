var amqp   = require('amqp');
var config = require('./config');

var rabbitmqConnection;

function getRabbitMqConnection(callback) {
    var rabbitmqURL = config.rabbitmqURL;

    if (rabbitmqConnection) {
        callback(rabbitmqConnection);
    } else {
        console.log("Starting RabbitMQ on: " + rabbitmqURL);
        var conn = amqp.createConnection({url: rabbitmqURL});
        conn.on('ready', function() {
            rabbitmqConnection = conn;
            callback(rabbitmqConnection);
        });
        conn.on('closed', function() {
            rabbitmqConnection = null;
        });
    }
}

exports.getRabbitMqConnection = getRabbitMqConnection;
