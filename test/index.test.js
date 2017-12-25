process.env.NODE_ENV = "test";

const chai = require('chai');

describe("NOP", () => {

	//Перед каждым тестом чистим базу
	beforeEach((done) => { 
		done();
	});

  it("NOP", (done) => {
    done();
  });

});