const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();

app.use(cors());
app.use(bodyParser());

const eventController = require('./controllers/eventController');
const userController = require('./controllers/userController');

app.post('/event', eventController.createEvent);
app.get('/event', eventController.getEvents);
app.post('/signup', userController.createUser);
app.post('/login', userController.login);

app.listen(PORT, HOST);
console.log(`Listening on http://${HOST}:${PORT}`);
