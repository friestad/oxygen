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
const locationController = require('./controllers/locationController')

app.get('/event/all/', eventController.getEvents);
app.get('/event/', eventController.getEvent);
app.get('/user/all/', userController.getUsers);
app.get('/user/events/', userController.getEvents);
app.get('/nearby/businesses/', resourceController.getNearbyBusinesses);
app.get('/location/address', locationController.searchAddress)
app.get('/event/all', eventController.getEvents);
app.get('/event', eventController.getEvent);
app.get('/user/all', userController.getUsers);
app.get('/user/events', userController.getEvents);
app.get('/user/resources', userController.getResources);
app.get('/resource/nearby-businesses', resourceController.getNearbyBusinesses);
app.get('/resource/all', resourceController.getResources);

app.post('/event/create-event', eventController.createEvent);
app.post('/event/delete-event', eventController.deleteEvent);
app.post('/event/add-participant', eventController.addParticipant);
app.post('/user/signup', userController.createUser);
app.post('/user/login', userController.login);
app.post('/user/delete-account', userController.deleteUser);
app.post('/resource/post', resourceController.postResource);
app.post('/resource/delete', resourceController.deleteResource);


app.listen(PORT, HOST);
console.log(`Listening on http://${HOST}:${PORT}`);
