const axios = require('axios');
const keys = require('../config/keys');

exports.searchAddress = async function (req, res) {
  const searchString = req.query.searchString;
  const url = `https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=${keys.hereAPI}&searchtext=${searchString}`;
  const response = await axios.get(url);

  const result = response.data.Response.View[0].Result;
  res.json(result);
};
