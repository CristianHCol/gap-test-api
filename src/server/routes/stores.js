'use strict';

const StoresRoutes = {};

StoresRoutes.register = module.exports = (server, options, next) => {
  server.route([
    {
      method: 'GET',
      path: '/services/stores',
      config: {
        description: 'get all stores',
        notes: 'get all the stores that are in the Database',
        tags: ['api'],
        pre: [
          server.preHandlers.storesPre.getAll
        ],
        handler: {
          storesHandler: { method: 'getAllStores' }
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
    }
  ]);

  return next();
};

StoresRoutes.register.attributes = {
  name: 'storeRoutes',
  version: '1.0.0'
};
