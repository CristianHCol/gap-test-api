'use strict';

const joi = require('joi');

const internals = module.exports = {};

internals.params = joi.object().keys({
    id: joi.number()
        .description('normal and overrited ids')
        .label('overrated ids')
});
