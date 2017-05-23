'use strict';

const mongoose = require('mongoose');

const internals = {};

internals.register = module.exports = (server, options, next) => {
    mongoose.connect(`mongodb://${options.host}/${options.db}`, (err, resp) => {
        if (err) {
            server.log('trouble conecting with database');
            return next(err);
        }

        server.log('database connected');
        return next();
    });
};

internals.register.attributes = {
    multi: false,
    name: 'mongo-connection'
};
