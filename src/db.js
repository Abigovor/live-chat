const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db_conf = require('../config').database.mongo;

let mongoUrl = `${db_conf.protocol}://${db_conf.user}:${encodeURIComponent(db_conf.password)}@${db_conf.host}`;

function connect () {
	return new Promise ( (resolve,reject) => {
		mongoose.connect(mongoUrl, { useMongoClient: true })
		.then(() => {
			console.log('success connection to db');
			resolve();
		})		
		.catch(err => {
			console.log('filed connect to db', err);
		})
	})
} 

function disconnect() {
	mongoose.connection.close();
}


module.exports = {connect, disconnect};
