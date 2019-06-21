/* eslint-disable class-methods-use-this */
const Unzip = require('adm-zip');
const { log } = require('console');
const { resolve } = require('path');
const { mkdir, remove } = require('fs-extra');

class Zip {
  /**
   * Exact arch in folder
   * @param {String} pathToArch
   */
  async exactArch(pathToArch) {
    const zip = new Unzip(resolve(__dirname, pathToArch));

    await mkdir('./qa-skeleton');
    await zip.extractAllTo('./qa-skeleton', true);
  }

  /**
   * Create archive with test env
   * @param {String} name
   * @param {String} folderName
   */
  async makeArch(name, folderName) {
    const zip = new Unzip();

    await zip.addLocalFolder(folderName, './');
    await zip.writeZip(`${name}.zip`);

    await remove(folderName, (err) => {
      if (err) throw new Error(err);
      log('Success');
    });
  }
}

module.exports = new Zip();
