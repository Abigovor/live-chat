const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const User = require('./models/User');
const db_conf = require('../config').database.mongo;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app
.get('/', function(req, res) {
  res.send('Welcome');  
})
.get('/users', function(req, res) {
	User.find({}, (err, users) => {
		if(err) return res.sendStatus(500);
		else res.send(users);
	})
})
.get('/user', function(req, res) {

    let name = req.body.name;
    let username = req.body.username;
    let password = req.body.password;

	// create a new user called chris
	var user = new User({
	  name: name || 'Chris',
	  username: username || 'sevilayha',
	  password: password || 'password' 
	});

	user.save(function(err) {
  		if (err) return res.sendStatus(500);

  		console.log('User saved successfully!');
  		res.sendStatus(200);
	})

})


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