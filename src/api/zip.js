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
   */
  async exectArch(pathToArch) {
    const zip = new Unzip(resolve(__dirname, pathToArch));
    await fs.mkdir('./qa-skeleton');
    await zip.extractAllTo('./qa-skeleton', true);
  }

  /**
   * @description Make zip archive
   * @param {String} name
   */
  async makeArch(name, folderName) {
    const zip = new Unzip();

    await zip.addLocalFolder(folderName, './');
    await zip.writeZip(`${name}.zip`);

    await fs.remove(folderName, (bug) => {
      if (bug) error(bug);
      log('EXCELLENT');
    });
  }
}

module.exports = new Zip();
