const mongoose = require('mongoose');
const userModel = require('./userModel');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const pointSchema = new Schema({
  type: {
    type: String,
    enum: ['Point'], // 'location.type' must be 'Point'
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

const polygonSchema = new Schema({
  type: {
    type: String,
    enum: ['Polygon'],
    required: true
  },
  coordinates: {
    type: [[[Number]]],
    required: true
  }
  
})

const EventSchema = new Schema({
  name: { type: String },
  start_location: {
    type: pointSchema,
    index: '2dsphere', // Used to sort by nearest start location
    required: true
  },

  end_location: {
    type: pointSchema,
    required: true
  },

  center_area: {
    type: polygonSchema,
    required: true
  },

  start_time: { type: Date },
  participants: [String],
});

module.exports = Model('Event', EventSchema);
