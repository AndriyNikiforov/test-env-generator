const fs = require('fs-extra');
const Git = require('nodegit');
const { log, error } = require('console');
const zipApi = require('./zip');

/**
 * @class GitApi
 */
class GitApi {
  constructor() {
    this.clone = Git.Clone;
    this.makeArch = zipApi.makeArch;
  }

  cloneSkeleton(address) {
    fs.mkdir('./tmp');
    this.clone(address, './tmp')
      .then((repository) => {
        log('Cloned ', repository.workdir());
        this.makeArch('skeleton');
      })
      .catch(err => error(err));
  }
}

module.exports = new GitApi();
