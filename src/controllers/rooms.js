const modules = require('../modules');

const Room = modules.models.Room;

function all(req, res) {
	Room.find({}, (err, rooms) => {
		if(err) return res.sendStatus(500);
		else res.send(rooms);
	})
}

function create(req, res) {

    let name = req.body.name || 'room1';
 	let created_at = new Date() ; 


	// create a new room
	let room = new Room({name,created_at});

	room.save(function(err, createRoom) {
  		if (err) return res.sendStatus(500);
  		
  		res.send(createRoom);
	})
}

module.exports = {all, create};