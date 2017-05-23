'use strict';

const joi = require('joi');
const _ = require('lodash');

const user = module.exports = {};

user.enums = {
    acces_type: {
        web: 'web',
        mobile: 'mobile',
        tablet: 'tablet'
    }
};

user.schema = joi.object().keys({

    email: joi.string().email().required()
        .description('user email').label('email'),

    password: joi.string().min(6).max(22) //check min and max when implements encrypt and decrypt
        .required().description('user password').label('password'),

    active: joi.boolean().default(false)
        .description('status fo an user').label('status'),

    role: joi.string().description('user role').label('role'),

    firstLogin: joi.date()
        .optional().description('first login for an user')
        .label('first login'),

    lastLoginAcces: joi.date()
        .optional().description('last login for an user')
        .label('last login'),

    recoveryPassword: joi.date()
        .optional().description('recovery date password')
        .label('recovery password'),

    type_platfform: joi.string().valid(_.values(user.enums.acces_type))
        .required().description('last plattform that user entered').label('platfor'),

    area: joi.string()
        .optional().description('user are').label('area')

});
