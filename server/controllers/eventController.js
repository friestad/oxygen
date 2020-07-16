/*
    Event controller
*/
const User = require('../models/userModel');
const Event = require('../models/eventModel');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const mongoDB = keys.mongoURL;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/* 
  Creates an event entry and enters it into the db.
  JSON keys:
    name: event name
    host_username: username of event host
    start_location: [long, lat] coordinates where event starts
    end_location: [long, lat] coordinates where event ends
    center_area: [polygon1[coordinate1[long, lat]], polygon2[], etc]
      Defines a polygon area that can be used for geofencing.
    start_time: Date and time event plans to start. Date object
    participants: List of usernames who plan on participating in the event
*/
exports.createEvent = function (req, res) {
  let body = req.body;

  Event.find(
    { name: body.name },
    { host_username: body.hostUsername },
    (err, events) => {
      if (err) throw err;
      if (events.length > 0)
        res.json({
          message: `Event named ${body.name} already exists for user ${body.username}`,
        });
      else {
        let event = new Event({
          name: body.name,
          host_username: body.hostUsername,
          start_location: body.startLocation,
          end_location: body.endLocation,
          start_time: new Date(body.startTime),
          participants: [],
        });

        event.save(function (err) {
          if (err) {
            throw err;
          }
          res.json({
            message: `Event ${req.body.name} successfully added to user ${req.body.hostUsername}`,
          });
        });
      }
    }
  );
};

/* 
  Returns all events sorted by start time
  Query keys:
    long: longitude value
    lat: latitude value
*/
exports.getEvents = function (req, res) {
  const long = Number(req.query.long);
  const lat = Number(req.query.lat);

  if (typeof long === 'undefined' || typeof lat === 'undefined') {
    throw new Error('Latitude or longitude not specified');
  }

  // Limits returned events to those up to 5k meters away.
  // Sorts by starting time in ascending order.
  Event.aggregate(
    [
      {
        $geoNear: {
          near: {
            type: 'Point',
            coordinates: [long, lat],
          },
          distanceField: 'dist.calculated',
          maxDistance: 5000,
          spherical: true,
        },
      },
    ],
    function (err, data) {
      if (err) {
        throw err;
      }
      data.sort((a, b) => a.start_time - b.start_time);
      res.send(data);
    }
  ).sort({ field: 'start_time', test: 'asc' });
};

/*
  Returns a singular event json.
  Query keys:
    name: event name
    host: event host username
*/
exports.getEvent = function (req, res) {
  Event.findOne(
    { name: req.query.name, host_username: req.query.username },
    (err, event) => {
      if (err) throw err;
      res.send(event);
    }
  );
};

/*
  Deletes specified event
  Query keys:
    username: host username
    eventname: event name
*/
exports.deleteEvent = function (req, res) {
  Event.deleteOne(
    { name: req.query.eventname, host_username: req.query.username },
    (err) => {
      if (err) throw err;
    }
  );
  res.json({ message: `Event ${req.query.eventname} successfully deleted` });
};

/*
  Adds participant username
  Query keys:
    username: participant username
    eventname: event name
*/
exports.addParticipant = function (req, res) {
  Event.find(
    { name: req.query.eventname, participants: req.query.username },
    (err, events) => {
      if (err) throw err;
      if (events.length > 0)
        res.json({ message: 'Participant already registered for event' });
      else {
        Event.updateOne(
          { name: req.query.eventname },
          { $push: { participants: req.query.username } },
          (err) => {
            if (err) throw err;
            res.json({ message: 'Participant successfully added' });
          }
        );
      }
    }
  );
};
