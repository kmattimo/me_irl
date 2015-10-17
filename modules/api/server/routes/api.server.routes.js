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

  // Single article routes
  // app.route('/api/articles/:articleId').all(articlesPolicy.isAllowed)
  //   .get(articles.read)
  //   .put(articles.update)
  //   .delete(articles.delete);
  // 
  // // Finish by binding the article middleware
  // app.param('articleId', articles.articleByID);
};
