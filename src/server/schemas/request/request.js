'use strict';

const joi = require('joi');

const request = module.exports = {};

request.schema = joi.object().keys({

    id: joi.string().min(6).required()
        .description('request id').label('id'),
    title: joi.string().required()
        .description('title of report').label('title'),
    requested: joi.date().required()
        .description('creation date').label('creation of request'),
    requester: joi.string().required()
        .description('person who creates the request').label('requester'),
    approver: joi.string().required()
        .description('person who approves the request').label('approver'),
    cost_center: joi.string().required()
        .description('cost center').label('cost center'),
    quantity: joi.number().min(1).required()
        .description('number of products to be tested').label('quantity'),
    product_reference: joi.string().required()
        .description('cost center').label('cost center'),
    start: joi.date().required()
        .description('start date of excecution').label('start date'),
    end: joi.date().required()
        .description('end date of excecution').label('end date'),
    notes: joi.array().items(joi.string())
        .required().description('notes applicable for each request').label('notes or news'),
    assay: joi.array().items(joi.string().regex(/^[0-9a-fA-F]{24}$/, 'MongoId.')).min(1)
        .description('object assay related with a request').label('assay'),
    status: joi.number().min(0).max(6)
        .optional().description('current status of a request').label('current status'),
    backgroundColor: joi.string().required()
        .description('color to show in the calendar').label('calendar color'),
    area: joi.string()
        .optional().description('area linked with the request').label('area'),
    total_price: joi.number()
        .optional().description('cost for this assay').label('cost')

});
