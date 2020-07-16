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
const resourceController = require('./controllers/resourceController');

app.post('/event', eventController.createEvent);
app.get('/event', eventController.getEvents);
app.post('/signup', userController.createUser);
app.post('/login', userController.login);
app.get('/nearby/businesses', resourceController.getNearbyBusinesses);

app.listen(PORT, HOST);
console.log(`Listening on http://${HOST}:${PORT}`);
