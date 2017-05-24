'use strict';

const joi = require('joi');

const user = module.exports = {};

user.schema = joi.object().keys({

    _id: joi.number().required()
        .description('norm id').label('id'),

    name: joi.string().min(6).max(20) //check min and max when implements encrypt and decrypt
        .required().description('name of a norm ex NTC-103020').label('norm name')
});
