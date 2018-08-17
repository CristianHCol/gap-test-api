'use strict';

const Boom = require('boom');
const Messages = require('../models/constants');
const EntityMessages = require('../models/entityMessages');

const articlesPre = module.exports = {};

articlesPre.getAll = (request, reply) => {
  try {
    request.headers.accept = Messages.CONTENT_TYPE;
    const methods = request.server.methods;
    // validate auth API token here
    methods.article.getAll()
      .then((resp) => {
        if (resp.success) {
          reply(resp);
        } else {
          reply(Boom.notFound(Messages.NOT_FOUND));
        }
      })
      .catch((error) => {
        console.log(EntityMessages.GET_PROJECT, error);
        reply(Boom.badImplementation(EntityMessages.GET_ARTICLE));
      });
  } catch (ex) {
    console.error(EntityMessages.GENERAL_ARTICLE_ERROR, ex);
    reply(Boom.badImplementation(ex));
  }
};

articlesPre.getByIdStore = (request, reply) => {
  try {
    request.headers.accept = Messages.CONTENT_TYPE;
    const methods = request.server.methods;
    // validate auth API token here
    if (!isNaN(request.params.id)) {
      methods.article.getByIdStore(request.params.id)
      .then((resp) => {
        if (resp.success) {
          reply(resp);
        } else {
          reply(Boom.notFound(Messages.NOT_FOUND));
        }
      })
      .catch((error) => {
        console.log(EntityMessages.GET_BYID_STORE, error);
        reply(Boom.badImplementation(EntityMessages.GET_BYID_STORE));
      });
    } else {
      reply({
        error_message: 'Bad Request',
        error_code: 400,
        success: false
      });
    }
  } catch (ex) {
    console.error(EntityMessages.GENERAL_ARTICLE_ERROR, ex);
    reply(Boom.badImplementation(ex));
  }
};
