/* eslint-disable class-methods-use-this */
const Unzip = require('adm-zip');
const rimraf = require('rimraf');
const { log } = require('console');
const { mkdir } = require('fs');
const { resolve } = require('path');

class Zip {
  /**
   * Exact arch in folder
   * @param {String} pathToArch
   */
  async exactArch(pathToArch) {
    const zip = new Unzip(resolve(__dirname, pathToArch));

    await mkdir('./qa-skeleton', (error) => {
      if (error) throw error;
    });

    await zip.extractAllToAsync('./qa-skeleton', true, (error) => {
      if (error) throw error;
    });
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
    await rimraf(folderName, (err) => {
      if (err) throw new Error(err);
      log('Success');
    });
  }
}

module.exports = new Zip();
