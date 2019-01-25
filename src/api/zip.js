/* eslint-disable class-methods-use-this */
const fs = require('fs-extra');
const Unzip = require('adm-zip');
const Console = require('console');
const zipFolder = require('zip-folder');
const { resolve } = require('path');

/**
 * @class Helper
 */
class Helper {
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
      if (err) Console.log('Error: ', err);
      fs.remove('./tmp', (error) => {
        if (error) Console.error(error);
        Console.log('EXCELLENT');
      });
    });
  }

  /**
   * @description Make user skeleton archive
   * @param {String} name
   * @param {String} path
   */
  userVersionArch(name, path) {
    zipFolder(path, name, (err) => {
      if (err) Console.log('Error: ', err);
      Console.log('EXCELLENT');
    });
  }
}

module.exports = new Helper();
