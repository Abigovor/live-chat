// Models
const User = require("./models/User");
const Message = require("./models/Message");
const History = require("./models/History");
const Room = require("./models/Room");
const UserRoom = require("./models/UserRoom");
exports.models = {User, Message,History,Room,UserRoom};


// Controllers
const users = require('./controllers/users');
const messages = require('./controllers/messages');
const rooms = require('./controllers/rooms');
exports.controllers = {users, messages,rooms};
