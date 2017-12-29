const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
	name: String,
 	created_at: Date,
  	updated_at: Date
});

var Room = mongoose.model("Room", RoomSchema);

module.exports = Room;