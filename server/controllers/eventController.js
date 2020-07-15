/*
    Event controller
*/
const Event = require('../models/eventModel');

const mongoose = require('mongoose');
const mongoDB = 'mongodb://root:example@mongo:27017';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

exports.createEvent = function (req, res) {
  const body = req.body;
  let event = new Event({
    name: body.name,
    start: body.start,
    end: body.end,
    startTime: new Date(),
    participants: 0,
  });
  event.save(function (err) {
    if (err) {
      throw err;
    }
    res.json({
      message: 'Event created',
    });
  });
};

exports.getEvents = function (req, res) {
  Event.find({}, function (err, events) {
    if (err) {
      return err;
    }
    res.json(events);
  })
};
