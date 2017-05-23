'use strict';

const BaseHandler = require('./baseHandler');

class ExampleHandler extends BaseHandler {

    getrequestExampleHandler(request, reply) {
        return reply(request.pre.examplePre);
    }


    exampleStatusHandler(request, reply) {
        return reply(request.pre.preStatus);
    }

}

module.exports = ExampleHandler;
