const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const modules = require('./modules');
const db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app
.get('/', function(req, res) {
  res.send('Welcome');  
})
.get('/users', modules.controllers.users.all)
.post('/user', modules.controllers.users.create)

.get('/messages', modules.controllers.messages.all)
.post('/message', modules.controllers.messages.create)


db.connect()
.then(() => {
    app.listen(3000, function () {
      console.log('server started');
    });
});

// for testing
module.exports = app;
