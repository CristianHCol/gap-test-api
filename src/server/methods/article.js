'use strict';

const articlesMethods = module.exports = {};
const fs = require('fs');
const path = require('path');
const reqPath = path.join(__dirname, '../mocks/articles.json');

//Gets the project object by id, name, code, or active
articlesMethods.getAll = {

  method: () => {
    try {
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

// Gets Articles by id store
articlesMethods.getByIdStore = {

  method: (id) => {
    try {
      const response = new Promise((resolve) => {
        fs.readFile(reqPath, 'utf8', (err, data) => {
          if (err) throw err;
          const allData = JSON.parse(data);
          allData.articles = allData.articles.filter(article => article.id === Number(id));
          if (allData.articles.legth > 0 ) {
            allData.total_elements = allData.articles.legth;
            resolve(allData);
          } else {
            resolve({
                error_message: 'Record not Found',
                error_code: 404,
                success: false
            });
          }
        });
      });
      return response;
    } catch (e) {
      throw e;
    }
  },
  options: {}
};
