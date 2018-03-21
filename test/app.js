var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app.js');
var should = chai.should();

chai.use(chaiHttp);

describe('Simple test', function() {
  it('should return Hello at root URL', function(done) {
	chai.request(app)
    .get('/')
    .end(function(err, res){
		res.should.have.status(200);
		res.body.message.should.equal('Hello');
		done();
    });
  });
});
