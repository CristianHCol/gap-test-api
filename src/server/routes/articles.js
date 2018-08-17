'use strict';
const common = require('../schemas/common');

const ArticlesRoutes = {};

ArticlesRoutes.register = module.exports = (server, options, next) => {
  server.route([
    {
      method: 'GET',
      path: '/services/articles',
      config: {
        description: 'get all articles',
        notes: 'get all the articles that are in the Database',
        tags: ['api'],
        pre: [
          server.preHandlers.articlesPre.getAll
        ],
        handler: {
          articlesHandler: { method: 'getAllArticles' }
        },
        validate: {
        },
        plugins: {
          'hapi-swagger': {
            responses: {
              200: {
                description: 'OK: service is online'
              },
              404: {
                description: 'NOT_FOUND: need to very the url or resources not found.'
              },
              500: {
                description: 'INTERNAL_SERVER_ERROR: application is completely down.'
              }
            }
          }
        }
      }
    }, {
      method: 'GET',
      path: '/services/articles/store/{id}',
      config: {
        description: 'Load all the articles from a specific store that are in Database',
        notes: 'Load all the articles from id store',
        tags: ['api'],
        pre: [
          server.preHandlers.articlesPre.getByIdStore
        ],
        handler: {
          articlesHandler: { method: 'getArticlesByIdStore' }
        },
        validate: {
          params: common.id
        },
        plugins: {
          'hapi-swagger': {
            responses: {
              200: {
                description: 'OK: service is online'
              },
              404: {
                description: 'NOT_FOUND: need to very the url or resources not found.'
              },
              500: {
                description: 'INTERNAL_SERVER_ERROR: application is completely down.'
              }
            }
          }
        }
      }
    }
  ]);

  return next();
};

ArticlesRoutes.register.attributes = {
  name: 'articlesRoutes',
  version: '1.0.0'
};
