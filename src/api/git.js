const fs = require('fs-extra');
const download = require('download-git-repo');
const { log, error } = require('console');
const zipApi = require('./zip');

/**
 * @class GitApi
 */
class GitApi {
  constructor() {
    this.makeArch = zipApi.makeArch;
  }

  /**
   * @description Clone repository and make zip archive
   * @param {String} address
   */
  cloneSkeleton(address) {
    fs.mkdir('./tmp');

    download(address, './tmp', (err) => {
      if (err) error(err);
      log('Cloned');
      this.makeArch('skeleton');
    });
  }
}

module.exports = new GitApi();
