'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
   mongoose = require('mongoose'),
  Player = mongoose.model('Player'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));


exports.test= function (req, res) {
  res.json("asdf");
};

exports.user = function(req, res) {
  
};

exports.experience= function (req, res) {
  res.json(req.params.userID);
  
};

exports.addExperience= function (req, res) {
  console.log(req.body);
  
  res.send();
};

exports.createUser = function(req,res) {
  console.log(req.body);
  var p = new Player(req.body);
  console.log(p.title);
  
  
  p.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(p);
    }
  });
};


