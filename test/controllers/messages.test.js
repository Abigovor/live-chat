process.env.NODE_ENV = "test";

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src/index');

const modules = require("../../src/modules");
const Message = modules.models.Message;

let should = chai.should();

chai.use(chaiHttp);


describe("messages controller", () => {

  //Перед каждым тестом чистим базу
  beforeEach((done) => { 
    Message.remove({}, (err, succ) => {
      // succ.result.n - count deleted row
      done();
    })
  });

  it("/GET /messages it should return empty arr", (done) => {
    chai.request(server)
    .get('/messages')
    .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
      done();
    });
  });

  it("/POST /message it should return created message", (done) => {

    let message = {message:'message text'};

    chai.request(server)
    .post('/message')
    .send(message)
    .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('_id');
        res.body.should.have.property('text', message.message);
        res.body.should.have.property('created_at');
      done();
    });
  });

});