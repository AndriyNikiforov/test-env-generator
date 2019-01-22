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
   * @param {String} path
   */
  appiumUpdate(path) {
    fs.mkdir('./tmp');
    Git.Clone(process.env.GIT_REPOSITORY_APPIUM, process.env.TMP)
      .then((repository) => {
        Console.log('Cloned ', repository.workdir());
        zipApi.makeArch(path, 'appium');
        fs.remove('./tmp');
      })
      .catch(err => Console.error(err));
  }

  /**
   * @description Clone from git selenium skeleton and making zip archive
   * @param {String} path
   */
  seleniumUpdate(path) {
    fs.mkdir('./tmp');
    Git.Clone(process.env.GIT_REPOSITORY_SELENIUM, process.env.TMP)
      .then((repository) => {
        Console.log('Cloned ', repository.workdir());
        zipApi.makeArch(path, 'selenium');
        fs.remove('./tmp');
      })
      .catch(err => Console.error(err));
  }

  /**
   * @description Clone from git webdriver.io skeleton and making zip archive
   * @param {String} path
   */
  webdriverIO(path) {
    fs.mkdir('./tmp');
    Git.Clone(process.env.GIT_REPOSITORY_WEBDRIVER, process.env.TMP)
      .then((repository) => {
        Console.log('Cloned ', repository.workdir());
        zipApi.makeArch(path, 'webdriverIO');
        fs.remove('./tmp');
      })
      .catch(err => Console.error(err));
  }
}



module.exports = new GitApi();
