process.env.NODE_ENV = "test";

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/index');
let should = chai.should();

chai.use(chaiHttp);


describe("NOP", () => {

	//Перед каждым тестом чистим базу
	beforeEach((done) => { 
		done();
	});

  it("/GET ", (done) => {
    chai.request(server)
    .get('/')
    .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.eql('Welcome');
      done();
    });
  });

});