'use strict';

const Boom = require('boom');
const Messages = require('../models/constants');
const EntityMessages = require('../models/entityMessages');

const storesPre = module.exports = {};

storesPre.getAll = (request, reply) => {
  try {
    request.headers.accept = Messages.CONTENT_TYPE;
    const methods = request.server.methods;
    // validate auth API token here
    methods.store.getAll()
      .then((resp) => {
        if (resp.success) {
          reply(resp);
        } else {
          reply(Boom.notFound(Messages.NOT_FOUND));
        }
      })
      .catch((error) => {
        console.log(EntityMessages.GET_PROJECT, error);
        reply(Boom.badImplementation(EntityMessages.GET_STORE));
      });
  } catch (ex) {
    console.error(EntityMessages.GENERAL_STORE_ERROR, ex);
    reply(Boom.badImplementation(ex));
  }
};
