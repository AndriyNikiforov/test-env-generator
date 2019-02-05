const fs = require('fs-extra');
const download = require('download-git-repo');
const { log } = require('console');
const zipApi = require('./zip');

/**
 * @class GitApi
 */
class GitApi {
  constructor() {
    this.colors = {
      cyan: '\x1b[36m%s\x1b[0m',
      magenta: '\x1b[35m',
    };
    this.makeArch = zipApi.makeArch;
    this.userArch = zipApi.makeUserArch;
  }

  /**
   * @description Clone repository and make zip archive
   * @param {String} address
   */
  async cloneSkeleton(address) {
    fs.mkdir('./tmp');

    await download(address, './tmp', (err) => {
      if (err) log(this.colors.magenta, err);
      log(this.colors.cyan, 'Cloned');
      this.makeArch('skeleton');
    });
  }
}

module.exports = new GitApi();
