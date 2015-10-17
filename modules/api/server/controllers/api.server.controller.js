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
  var username = req.params.userID;
  Player.findOne({ 'username': username }, function (err, player) {
    if (err) return errorHandler(err);
      var experience = 0;
      for(var i=0; i<player.exp.length; i++) {
          experience += player.exp[i].value;
      }
      res.json(experience);
  });
};

exports.addExperience= function (req, res) {
  console.log(req.body);
 var expArray = req.body;
 var username = req.params.userID;
 Player.findOne({ 'username': username }, function (err, player) {
   if (err) return errorHandler(err);
   console.log("username: " + player.username);
   
   for(var i=0; i<expArray.exp.length; i++) {
     player.exp.push(expArray.exp[i]);
   }
   
   console.log(expArray.exp.length);
   player.save(function (err) {
     if (err) {
       return res.status(400).send({
         message: errorHandler.getErrorMessage(err)
       });
     } else {
       res.json(player);
     }
   });
 });
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


