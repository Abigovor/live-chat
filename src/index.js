const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const modules = require('./modules');
const db_conf = require('../config').database.mongo;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app
.get('/', function(req, res) {
  res.send('Welcome');  
})
.get('/users', modules.controllers.users.all)
.post('/user', modules.controllers.users.create)

.get('/messages', modules.controllers.messages.all)
.post('/message', modules.controllers.messages.create)


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let mongoUrl = `${db_conf.protocol}://${db_conf.user}:${encodeURIComponent(db_conf.password)}@${db_conf.host}`;

mongoose.connect(mongoUrl, { useMongoClient: true })
.then(() => {
	
	console.log('success connection to db');

	app.listen(3000, function () {
	  console.log('server started');
	});
})
.catch(err => {
	console.log('filed connect to db', err);
})

// for testing
module.exports = app;
