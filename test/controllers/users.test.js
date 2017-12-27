process.env.NODE_ENV = "test";

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src/index');
let should = chai.should();

const modules = require("../../src/modules");
const User = modules.models.User;

chai.use(chaiHttp);


describe("users controller", () => {

	//Перед каждым тестом чистим базу
	beforeEach((done) => { 
    User.remove({}, (err, succ) => {
      done();
    })
	});

  it("/GET /users it should return empty arr", (done) => {
    chai.request(server)
    .get('/users')
    .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
      done();
    });
  });

  it("/POST /user it should return created user", (done) => {

    let user = {name:'Alex', username:'Pucl', password:'qwerty'};

    chai.request(server)
    .post('/user')
     .send(user)
    .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('_id');
        res.body.should.have.property('name', user.name);
        res.body.should.have.property('username', user.username);
        res.body.should.have.property('password', user.password);
      done();
    });
  });

});