const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const UserSchema = new Schema({
  username: { type: String},
  passwordHash: { type: String },
  events: [String]
});

module.exports = Model('User', UserSchema);
