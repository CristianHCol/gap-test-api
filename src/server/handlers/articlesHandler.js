'use strict';

const BaseHandler = require('./baseHandler');

class ArticlesHandler extends BaseHandler {

    getAllArticles(request, reply) {
        return reply(request.pre.getAll);
    }

    getArticlesByIdStore(request, reply) {
      return reply(request.pre.getByIdStore);
  }

}

module.exports = ArticlesHandler;
