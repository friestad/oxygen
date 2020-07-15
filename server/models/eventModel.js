const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const EventSchema = new Schema({
  name: { type: String },
  start: {
    coordinates: [Number]
  },
  end: {
    coordinates: [Number]
  },
  startTime: { type: Date },
  participants: [String],
});

module.exports = Model('Event', EventSchema);
