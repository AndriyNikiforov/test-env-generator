const Git = require('nodegit');
const Console = require('console');
const { makeArch } = require('../zipapi/');

// Get to new appium asset
const appiumUpdate = (path) => {
  Git.Clone(process.env.GIT_REPOSITORY_APPIUM, path)
    .then((repository) => {
      Console.log('Cloned ', repository.workdir());
      makeArch(path, 'appium');
    })
    .catch(err => Console.error(err));
};

// Get to new selenium asset
const seleniumUpdate = (path) => {
  Git.Clone(process.env.GIT_REPOSITORY_SELENIUM, path)
    .then((repository) => {
      Console.log('Cloned ', repository.workdir());
      makeArch(path, 'selenium');
    })
    .catch(err => Console.error(err));
};

// Get to new webdriverIO asset
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
