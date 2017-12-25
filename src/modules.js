// Models
const User = require("./models/User");
const Message = require("./models/Message");
exports.models = {User, Message};


// Controllers
const users = require('./controllers/users');
const messages = require('./controllers/messages');
exports.controllers = {users, messages};
