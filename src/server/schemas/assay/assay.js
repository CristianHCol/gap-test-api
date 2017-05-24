'use strict';

const joi = require('joi');
const type = require('../test_type/types');
const norm = require('../norms/norm');

const assay = module.exports = {};

assay.schema = joi.object().keys({

    location: joi.string().min(6).max(35)
        .optional().description('location of excecution assay').label('location'),

    excecuters: joi.array().items(joi.string())
        .optional().description('excecuter assay').label('list of excecuter'),

    test_type: joi.array().items(type.schema)
        .required().description('type of test to be excecuted').label('type of test'),

    excecuted: joi.date().description('date when the assay was excecuted').label('excecution date'),

    norms: joi.array().items(norm.schema)
        .required().description('type of test to be excecuted')
        .label('applicable norms for a assay'),

    status: joi.number().min(0).max(6)
        .optional().description('current status of an assay').label('current status'),

    notes: joi.array().items(joi.string())
        .min(1).required().description('applicable for each assay').label('news'),

    images: joi.array().items(joi.string())
        .optional().description('list of images attached for an assay').label('list of images'),

    unit_price: joi.number()
        .optional().description('cost for this assay').label('cost')

});
