/* eslint-disable class-methods-use-this */
const fs = require('fs-extra');

const { resolve } = require('path');
const { log, error } = require('console');

const moveFile = (name) => {
  if (!fs.existsSync('./test_case')) {
    fs.mkdir('./test_case');
  }

  fs.move(name, `./test_case/${name}.docx`)
    .then(() => log('Success'))
    .catch(() => error('Pleas use other name'));
};

const convert = () => {

};

module.exports = {
  makeFile: convert,
};
