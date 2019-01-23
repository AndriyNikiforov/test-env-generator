const fs = require('fs-extra');
const Git = require('nodegit');
const { log, error } = require('console');
const zipApi = require('../zipapi/');

/**
 * @class GitApi
 */
class GitApi {
  constructor() {
    this.clone = Git.Clone;
    this.makeArch = zipApi.makeArch;
  }

  /**
   * @description Clone from git appium skeleton and making zip archive
   */
  appiumUpdate() {
    fs.mkdir('./tmp');
    this.clone('https://github.com/AndriyNikiforov/appiumwdblui.git', './tmp')
      .then((repository) => {
        log('Cloned ', repository.workdir());
        this.makeArch('appium');
      })
      .catch(err => error(err));
  }

  /**
   * @description Clone from git selenium skeleton and making zip archive
   */
  seleniumUpdate() {
    fs.mkdir('./tmp');
    this.clone('https://github.com/AndriyNikiforov/selblui.git', './tmp')
      .then((repository) => {
        log('Cloned ', repository.workdir());
        this.makeArch('selenium');
      })
      .catch(err => error(err));
  }

  /**
   * @description Clone from git webdriver.io skeleton and making zip archive
   */
  webdriverIO() {
    fs.mkdir('./tmp');
    this.clone('https://github.com/AndriyNikiforov/selwdioblui.git', './tmp')
      .then((repository) => {
        log('Cloned ', repository.workdir());
        this.makeArch('webdriverIO');
      })
      .catch(err => error(err));
  }
}

module.exports = new GitApi();
