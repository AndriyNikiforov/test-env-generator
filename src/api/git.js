const fs = require('fs-extra');
const Git = require('nodegit');
const Console = require('console');
const zipApi = require('../zipapi/');

/**
 * @class GitApi
 */
class GitApi {
  /**
   * @description Clone from git appium skeleton and making zip archive
   */
  appiumUpdate() {
    fs.mkdir('./tmp');
    Git.Clone('https://github.com/AndriyNikiforov/appiumwdblui.git', './tmp')
      .then((repository) => {
        Console.log('Cloned ', repository.workdir());
        zipApi.makeArch('appium');
      })
      .catch(err => Console.error(err));
  }

  /**
   * @description Clone from git selenium skeleton and making zip archive
   */
  seleniumUpdate() {
    fs.mkdir('./tmp');
    Git.Clone('https://github.com/AndriyNikiforov/selblui.git', './tmp')
      .then((repository) => {
        Console.log('Cloned ', repository.workdir());
        zipApi.makeArch('selenium');
      })
      .catch(err => Console.error(err));
  }

  /**
   * @description Clone from git webdriver.io skeleton and making zip archive
   */
  webdriverIO() {
    fs.mkdir('./tmp');
    Git.Clone('https://github.com/AndriyNikiforov/selwdioblui.git', './tmp')
      .then((repository) => {
        Console.log('Cloned ', repository.workdir());
        zipApi.makeArch('webdriverIO');
      })
      .catch(err => Console.error(err));
  }
}

module.exports = new GitApi();
