'use strict';

// const Messages = require('../models/constants');
// const Util = require('../utils');

const storesMethods = module.exports = {};
const fs = require('fs');
const path = require('path')

// Gets all stores
storesMethods.getAll = {

  method: () => {
    try {
      const reqPath = path.join(__dirname, '../mocks/stores.json');
      const response = new Promise((resolve) => {
        fs.readFile(reqPath, 'utf8', (err, data) => {
          if (err) throw err;
          resolve(JSON.parse(data));
        });
      });
      return response;
    } catch (e) {
      throw e;
    }
  },
  options: {}
};

