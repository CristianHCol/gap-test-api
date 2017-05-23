'use strict';

const internals = module.exports = {};

internals.hellowWorld = {
    method: (message1, message2) => {
        const a = new Promise((resolve, reject) => {
            if (message1 != null && message2 != null) {
                resolve('good');
            } else {
                reject('bad');
            }
        });

        return a;
    },
    options: {}
};

internals.greet = {

    method: (greeting) => {
        const b = new Promise((resolve, reject) => {
            if (greeting != null) {
                resolve('good');
            } else {
                reject('bad');
            }
        });

        return b;
    },
    options: {}
};


