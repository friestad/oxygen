const axios = require('axios');
const keys = require('../config/keys');
const Resource = require('../models/resourceModel')

/* 
	Gets all nearby businesses
	Query keys:
    lat: latitude value
    long: longitude value
*/
exports.getNearbyBusinesses = async function (req, res) {
	const lat = req.query.lat;
	const long = req.query.long;
	if (lat === 'undefined' || long === 'undefined') {
		throw new Error('Latitude or longitude is not defined.');
	}
	const url = `https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${long}&categories=servicestations,pharmacy,drugstores,convenience`;
	const response = await axios.get(url, {
		headers: {
			Authorization: keys.yelpAPI,
		},
	});
	const businesses = response.data.businesses;
	const result = businesses.sort((a, b) => a.distance > b.distance ? 1 : -1)
	res.json(result);
};


/*
	Post new resource
	Query keys:
		lat: latitude value
		long: longitude value
		username: host username
		name: resource name
*/
exports.postResource = function (req, res) {
	Resource.find({ name: req.query.name, username: req.query.username }, (err, resources) => {
		if (err) return err;
		if (resources.length > 0) res.json({ message: `Resource ${req.query.name} already exists for user ${req.query.username}` })
		else {
			const lat = req.query.lat;
			const long = req.query.long;

			const resource = new Resource({
				host: req.query.username,
				name: req.query.name,
				location: {
					type: "Point",
					coordinates: [long, lat]
				}
			})

			resource.save((err) => {
				if (err) throw err;
				res.json({ message: "Resource successfully saved" })
			})
		}
	})

}

/*
	Deletes specified resource
	Query params:
		name: resource name
		username: host username
*/
exports.deleteResource = function (req, res) {
	Resource.deleteOne({ name: req.query.name, host: req.query.username }, (err) => {
		if (err) throw err;
		res.json({ message: "Resource successfully deleted" })
	})
}

/*
	Lists available community resources near you
	Query params:
		long: longitude value
		lat: latitude value
*/
exports.getResources = function (req, res) {
	const long = Number(req.query.long);
	const lat = Number(req.query.lat);

	if (typeof long === 'undefined' || typeof lat === 'undefined') {
		throw new Error('Latitude or longitude not specified');
	}

	// Limits returned events to those up to 5k meters away.
	// Sorts by starting time in ascending order.
	Resource.aggregate(
		[
			{
				$geoNear: {
					near: {
						type: "Point",
						coordinates: [long, lat]
					},
					distanceField: "dist.calculated",
					maxDistance: 5000,
					spherical: true
				}
			}
		], function (err, data) {
			if (err) {
				throw err;
			}
			res.send(data);
		});
}