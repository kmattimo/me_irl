'use strict';

/**
 * Module dependencies.
 */
// var articlesPolicy = require('../policies/articles.server.policy'),
var  api = require('../controllers/api.server.controller');

module.exports = function (app) {
  // Articles collection routes
  app.route('/api/test').all()
    .get(api.test)
    .post(api.test);

app.route('/api/experience/:userID').all()
  .get(api.experience)
  .post(api.addExperience);
  
  
app.route('/api/user/create').all()
  .post(api.createUser);  
};
