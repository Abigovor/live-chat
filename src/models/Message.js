const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  text: String,
  to: { type: Schema.Types.ObjectId, ref: 'User' },
  from: { type: Schema.Types.ObjectId, ref: 'User' },
  created_at: Date,
  updated_at: Date
});

var Message = mongoose.model("Message", messageSchema);

module.exports = Message;