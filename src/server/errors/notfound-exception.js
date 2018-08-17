const BaseException = require('./base');

module.exports = class EntityNotFoundException extends BaseException {

    constructor(msg, code) {
        super('Record Not Found', msg, code = code || 404);
    }
};
