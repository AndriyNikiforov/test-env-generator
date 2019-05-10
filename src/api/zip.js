/* eslint-disable class-methods-use-this */
const Unzip = require('adm-zip');
const { resolve } = require('path');
const { error, log } = require('console');
const { mkdir, remove } = require('fs-extra');

/**
 * @class Zip
 */
class Zip {
  async exactArch(pathToArch) {
    const zip = new Unzip(resolve(__dirname, pathToArch));
    await mkdir('./qa-skeleton');
    await zip.extractAllTo('./qa-skeleton', true);
  }

  async makeArch(name, folderName) {
    const zip = new Unzip();

    await zip.addLocalFolder(folderName, './');
    await zip.writeZip(`${name}.zip`);

    await remove(folderName, (bug) => {
      if (bug) error(bug);
      log('EXCELLENT');
    });
  }
}

module.exports = new Zip();
