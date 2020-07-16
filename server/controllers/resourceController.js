const axios = require('axios');
const keys = require('../config/keys');
const { console } = require('window-or-global');
exports.getNearbyBusinesses = async function (req, res) {
  const lat = req.query.lat;
  const long = req.query.long;
  if (lat === 'undefined' || long === 'undefined') {
    throw new Error('Latitude or longitude is not defined.');
  }
  const url = `https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${long}`;
  const response = await axios.get(url, {
    headers: {
      Authorization: keys.yelpAPI,
    },
  });
  const businesses = response.data.businesses;
  const result = businesses.sort((a, b) => a.distance > b.distance ? 1 : -1)
  res.json(result);
};
