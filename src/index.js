const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const modules = require('./modules');
const db = require('./db');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app
.get('/', function(req, res) {
  res.send('Welcome');  
})
.get('/users', modules.controllers.users.all)
.post('/user', modules.controllers.users.create)

.get('/messages', modules.controllers.messages.all)
.get('/message', modules.controllers.messages.create)

.get('/rooms', modules.controllers.rooms.all)
.get('/room', modules.controllers.rooms.create)



db.connect()
.then(() => {
    app.listen(PORT, function () {
      console.log('server started');
    });
});

// for testing
module.exports = app;
