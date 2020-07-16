const { Module } = require('module');
const mongoose = require('mongoose');

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

const ResourceSchema = new Schema({
	host: { type: String },
	name: { type: String },
	location: {
		type: pointSchema,
		index: "2dsphere",
		required: true
	} 
})

module.exports = Model('Resource', ResourceSchema)