const modules = require('../modules');

const Message = modules.models.Message;

function all(req, res) {
	Message.find({})
	.populate('from')
	.populate('to')
	.exec((err, users) => {
		if(err) return res.sendStatus(500);
		else res.send(users);
	})
}

function create(req, res) {

    let text = req.body.message || 'my message';
    let from = req.body.from; // user id from message
    let to = req.body.to; // user id to message
    let created_at = new Date();

	var message = new Message({message, from, to, created_at});

	message.save(function(err) {
  		if (err) return res.sendStatus(500);

  		console.log('Message saved successfully!');
  		res.sendStatus(200);
	})
}

module.exports = {all, create};