/* eslint-disable class-methods-use-this */
const fs = require('fs-extra');
const Unzip = require('adm-zip');
const zipFolder = require('zip-folder');
const { resolve } = require('path');
const { error, log } = require('console');

/**
 * @class Zip
 */
class Zip {
  /**
   * @description Execute zip archive
   * @param {String} pathArch
   * @param {String} pathToExt
   */
  exectArch(pathArch, pathToExt) {
    const zip = new Unzip(resolve(__dirname, pathArch));
    zip.extractAllTo(pathToExt, true);
  }

  /**
   * @description Make zip archive
   * @param {String} name
   */
  makeArch(name) {
    zipFolder('./tmp', `./${name}.zip`, (err) => {
      if (err) log('Error: ', err);
      fs.remove('./tmp', (bug) => {
        if (bug) error(bug);
        log('EXCELLENT');
      });
    });
  }
}

module.exports = new Zip();
