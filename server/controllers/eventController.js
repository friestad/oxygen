/*
    Event controller
*/

const Center = require('../util/getCenterArea');
const Event = require('../models/eventModel');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const mongoDB = keys.mongoURL;


mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

exports.createEvent = function (req, res) {
  const body = req.body;
  const centerArea = Center.getCenterArea(body);
  let event = new Event({
    name: body.name,
    start_location: body.startLocation,
    end_location: body.endLocation,
    center_area: {
      type: "Polygon",
      coordinates: centerArea
    },
    start_time: new Date(body.startTime),
    participants: [],
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
  const long = Number(req.query.long);
  const lat = Number(req.query.lat);

  if (typeof long === 'undefined' || typeof lat === 'undefined') {
    throw new Error('Latitude or longitude not specified');
  }

  Event.aggregate(
    [
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [long, lat]
          },
          distanceField: "dist.calculated",
          spherical: true
        }
      }
    ], (err, data) => {
      if(err) {
        throw err;
      }
      res.send(data);
    });
};
