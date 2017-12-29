const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
  room_id:  { type: Schema.Types.ObjectId, ref: 'Room' },
  message_id:  { type: Schema.Types.ObjectId, ref: 'Message' }
});

var History = mongoose.model("History", HistorySchema);

module.exports = History;