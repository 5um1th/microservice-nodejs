var services = require('../../services');

function subscribeMessage(exchangeName, queueName, routingKey) {
  services.getRabbitMqConnection(function(connection) {

    var exchange = {
      name: exchangeName,
      opts: { durable: true, type: 'direct', autoDelete: false}
    };

    var queue = {
      name: queueName,
      opts: {exclusive: false, durable: true, autoDelete: false}
    };

    var ex = connection.exchange(exchange.name, exchange.opts, function(ex) {
      var q = connection.queue(queue.name, queue.opts, function(q) {
        q.bind(exchange.name, routingKey);
        q.on('queueBindOk', function() {
          q.subscribe(function (message) {
            var buf = new Buffer(message.data);
            console.log('Received message: ' + buf.toString('utf-8'));
          });
        });
      });
    });
  });
};

exports.subscribeMessage = subscribeMessage;
