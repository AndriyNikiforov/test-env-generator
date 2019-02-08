/* eslint-disable class-methods-use-this */
const fs = require('fs-extra');
const Unzip = require('adm-zip');
const { resolve } = require('path');
const { error, log } = require('console');

/**
 * @class Zip
 */
class Zip {
  /**
   * @description Execute zip archive
   * @param {String} pathToArch
   * @param {String} pathToExt
   */
  async exectArch(pathToArch, pathToExt) {
    const zip = new Unzip(resolve(__dirname, pathToArch));
    await zip.extractAllTo(pathToExt, true);
  }

  /**
   * @description Make zip archive
   * @param {String} name
   */
  async makeArch(name) {
    const zip = new Unzip();

    await zip.addLocalFolder('./tmp', './');
    await zip.writeZip(`${name}.zip`);

    await fs.remove('./tmp', (bug) => {
      if (bug) error(bug);
      log('EXCELLENT');
    });
  }
}

module.exports = new Zip();
