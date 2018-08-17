'use strict';

const BaseHandler = require('./baseHandler');

class StoresHandler extends BaseHandler {

    getAllStores(request, reply) {
        return reply(request.pre.getAll);
    }

}

module.exports = StoresHandler;
