const modules = require('../modules');

const User = modules.models.User;

function all(req, res) {
	User.find({}, (err, users) => {
		if(err) return res.sendStatus(500);
		else res.send(users);
	})
}

function create(req, res) {

    let name = req.body.name || 'Chris';
    let username = req.body.username || 'sevilayha';
    let password = req.body.password || 'password';

	// create a new user called chris
	var user = new User({name, username,password});

	user.save(function(err, createUser) {
  		if (err) return res.sendStatus(500);
  		
  		res.send(createUser);
	})
}

module.exports = {all, create};