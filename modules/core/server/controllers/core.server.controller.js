'use strict';

var path = require('path'),
   mongoose = require('mongoose'),
  Player = mongoose.model('Player'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));


/**
 * Render the main application page
 */
exports.renderIndex = function (req, res) {
  
  var users = Player.find(function (err, users) { 
    if (err) return errorHandler(err);
      console.log(users);
      res.render('modules/core/server/views/index', {
        user: req.user || null, 
        usersObject:users
      });
    
  });
  
  

};

/**
 * Render the server error page
 */
exports.renderServerError = function (req, res) {
  res.status(500).render('modules/core/server/views/500', {
    error: 'Oops! Something went wrong...'
  });
};

/**
 * Render the server not found responses
 * Performs content-negotiation on the Accept HTTP header
 */
exports.renderNotFound = function (req, res) {

  res.status(404).format({
    'text/html': function () {
      res.render('modules/core/server/views/404', {
        url: req.originalUrl
      });
    },
    'application/json': function () {
      res.json({
        error: 'Path not found'
      });
    },
    'default': function () {
      res.send('Path not found');
    }
  });
};
