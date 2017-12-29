const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserRoomSchema = new Schema({
	user_id: { type: Schema.Types.ObjectId, ref: 'User' },
	room_id: { type: Schema.Types.ObjectId, ref: 'Room' }
});

var UserRoom = mongoose.model("UserRoom", UserRoomSchema);

module.exports = UserRoom;