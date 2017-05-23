'use strict';

const internals = module.exports = {};



internals.examplePre = (request, reply) => {
    request.headers.accept = 'application/vnd.api+json';

    const methods = request.server.methods;

    methods.methodExample.hellowWorld('HI', 'test')
        .then(resp => reply(resp))
        .catch(error => reply(new Error('error procesing example 1')));
};

internals.preStatus = (request, reply) => {
    request.headers.accept = 'application/vnd.api+json';

    const methods = request.server.methods;

    methods.methodExample.greet('hellow world')
        .then(resp => reply(resp))
        .catch(error => reply(new Error('error procesing example 2')));
};
