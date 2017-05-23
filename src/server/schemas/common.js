'use strict';

const joi = require('joi');

const internals = module.exports = {};

internals.params = joi.object().keys({
    mongo_id: joi.string()
        .regex(/^[0-9a-fA-F]{24}$/, 'MongoId.')
        .description('mongo id.')
        .label('mongoId'),
    id: joi.number()
        .description('normal and overrited ids')
        .label('overrated ids')
});

internals.query = joi.object().keys({
    filter: joi.string().optional(),
    fields: joi.string().optional(),
    sort: joi.string().optional(),
    limit: joi.number().default(20),
    page: joi.number().default(1)
});
