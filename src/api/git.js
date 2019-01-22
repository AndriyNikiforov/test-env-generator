const fs = require('fs-extra');
const Git = require('nodegit');
const Console = require('console');
const zipApi = require('../zipapi/');

/**
 * @class GitApi
 */
class GitApi {
  constructor() {
    fs.mkdir('./tmp');
  }
  /**
   * @description Clone from git appium skeleton and making zip archive
   */
  appiumUpdate() {
    Git.Clone(process.env.GIT_REPOSITORY_APPIUM, './tmp')
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
    Git.Clone(process.env.GIT_REPOSITORY_SELENIUM, './tmp')
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
    Git.Clone(process.env.GIT_REPOSITORY_WEBDRIVER, './tmp')
      .then((repository) => {
        Console.log('Cloned ', repository.workdir());
        zipApi.makeArch('webdriverIO');
      })
      .catch(err => Console.error(err));
  }
}

module.exports = new GitApi();
