'use strict';

const joi = require('joi');

const status = module.exports = {};

status.schema = joi.object().keys({

    _id: joi.number().min(0).max(6).required()
        .description('status id').label('id'),

    desc: joi.string().min(6).max(15)
        .required().description('status description').label('description')
});
