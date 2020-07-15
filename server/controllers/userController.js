/*
    This can be changed if wanted. Just thought I would build a login API we can use if we 
    don't come up with anything else.
*/

const User = require('../models/userModel');
const mongoose = require('mongoose');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const mongoDB = 'mongodb://root:example@mongo:27017';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

exports.createUser = function (req, res) {
  User.find({ username: req.body.username }, function (err, users) {
    if (err) {
      throw err;
    } else {
      if (users.length == 0) {
        const newUser = new User({
          username: req.body.username,
          passwordHash: CryptoJS.SHA256(req.body.password),
          events: [],
        });
        delete req.body;
        console.log(newUser);
        newUser.save(function (err) {
          if (err) throw err;
          res.json({
            message: 'User created',
          });
        });
      } else {
        console.log(users);
        res.json({
          message: 'Username is already in use',
        });
      }
    }
  });
};

exports.login = async function (req, res, next) {
  try {
    let user = await User.findOne({ username: req.body.username }).exec();
    console.log(user);
    if (!user) {
      return res.status(400).send({ message: 'The username does not exist' });
    }
    if (user.passwordHash != CryptoJS.SHA256(req.body.password)) {
      return res.status(400).send({ message: 'The password is invalid' });
    }

    const payload = {
      id: user.id,
      username: user.username,
    };

    let secret = keys.secret;
    delete req.body;
    jwt.sign(
      payload,
      secret,
      {
        expiresIn: 10800, // 3 hours in seconds
      },
      (err, token) => {
        res.json({
          success: true,
          token: token,
          message: 'Login successful!',
        });
      }
    );
  } catch (error) {
    res.status(500).send(error);
  }
};
