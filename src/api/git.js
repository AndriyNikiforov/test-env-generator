const Git = require('nodegit');
const Unzip = require('adm-zip');
const Console = require('console');
const { resolve } = require('path');

// Update appium asset
const appiumUpdate = () => {
  Git.Clone(process.env.GIT_REPOSITORY_APPIUM, './tmp')
    .then((repository) => {
      const zip = new Unzip();
      Console.log('Cloned ', repository.workdir());
    })
    .catch(err => Console.error(err));
};

// Update selenium asset
const seleniumUpdate = () => {
  Git.Clone(process.env.GIT_REPOSITORY_SELENIUM, './tmp')
    .then((repository) => {
      const zip = new Unzip();
      Console.log('Cloned ', repository.workdir());
    })
    .catch(err => Console.error(err));
};

// Update webdriverIO asset
const webdriverIO = () => {
  Git.Clone(process.env.GIT_REPOSITORY_WEBDRIVER, './tmp')
    .then((repository) => {
      const zip = new Unzip();
      Console.log('Cloned ', repository.workdir());
    })
    .catch(err => Console.error(err));
};

module.exports = {
  webdriverIO,
  appiumUpdate,
  seleniumUpdate,
};
