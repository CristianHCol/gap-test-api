'use strict';

const joi = require('joi');

const testTypes = module.exports = {};

testTypes.schema = joi.object().keys({

    _id: joi.number().required()
        .description('type of test id').label('id'),

    name: joi.string().max(20)
        .required().description('test name').label('name'),

    area: joi.string()
        .required().description('area related with this type test').label('area'),

    data: joi.object().required()
    .description('this is an object with the data to be filled out').label('description')

});
