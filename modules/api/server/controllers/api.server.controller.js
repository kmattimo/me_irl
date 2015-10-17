'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  // mongoose = require('mongoose'),
  // Article = mongoose.model('Article'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));


exports.test= function (req, res) {
  res.json("asdf");
};

exports.experience= function (req, res) {
  res.json(req.params.userID);
  // console.log(req.params.userID);
};

exports.setExperience= function (req, res) {
  res.json(90000);
};


