'use strict';

const joi = require('joi');

const projects = module.exports = {};


projects.schema = joi.object().keys({

    id: joi.string().required()
        .description('project id').label('id'),

    name: joi.string().min(5).max(30) 
        .required().description('project name').label('name'),

    code: joi.string().required()
        .description('project code').label('code'),

    cost_center: joi.string().description('cost center').label('cost center'),

    active: joi.boolean()
        .required().description('projet status')
        .label('status'),


});
