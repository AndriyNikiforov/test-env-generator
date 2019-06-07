const { resolve } = require('path');
const { copyFile } = require('fs-extra');
const { log, error } = require('console');

module.exports = () => copyFile(resolve(__dirname, '../assets/config/index.js'), 'chrome.config.js',
  (err) => {
    if (err) error(err);
    log('Success');
  });
