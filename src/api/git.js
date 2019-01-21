const Git = require('nodegit');
const Console = require('console');
const { makeArch } = require('../zipapi/');

/**
 * @description Clone from git appium skeleton and making zip archive
 * @param {String} path
 */
const appiumUpdate = (path) => {
  Git.Clone(process.env.GIT_REPOSITORY_APPIUM, path)
    .then((repository) => {
      Console.log('Cloned ', repository.workdir());
      makeArch(path, 'appium');
    })
    .catch(err => Console.error(err));
};

/**
 * @description Clone from git selenium skeleton and making zip archive
 * @param {String} path
 */
const seleniumUpdate = (path) => {
  Git.Clone(process.env.GIT_REPOSITORY_SELENIUM, path)
    .then((repository) => {
      Console.log('Cloned ', repository.workdir());
      makeArch(path, 'selenium');
    })
    .catch(err => Console.error(err));
};

/**
 * @description Clone from git webdriver.io skeleton and making zip archive
 * @param {String} path
 */
const webdriverIO = (path) => {
  Git.Clone(process.env.GIT_REPOSITORY_WEBDRIVER, path)
    .then((repository) => {
      Console.log('Cloned ', repository.workdir());
      makeArch(path, 'webdriverIO');
    })
    .catch(err => Console.error(err));
};

module.exports = {
  webdriverIO,
  appiumUpdate,
  seleniumUpdate,
};
