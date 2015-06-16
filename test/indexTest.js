var app     = require('../index.js');
var request = require('supertest')(app);

describe('my api', function() {
  it('returns hello world', function(done) {
    request
      .get('/')
      .expect('Hello world\n', done);
  });
});
