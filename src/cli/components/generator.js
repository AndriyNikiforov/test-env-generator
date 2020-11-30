const { prompt } = require('inquirer');
const { exactArch } = require('../api/zip');
const { generatorQuestion } = require('./config');

const path = {
  appium: './lib/assets/appiumwdblui.zip',
  selJest: './lib/assets/selje.zip',
  pySelenium: './lib/assets/pyT.zip',
};

module.exports = () => {
  prompt(generatorQuestion)
    .then((param) => {
      switch (param.type) {
        case 'selenium':
          exactArch(path.selJest);
          break;
        case 'appium':
          exactArch(path.appium);
          break;
        case 'python-selenium':
          exactArch(path.pySelenium);
          break;
        default: break;
      }
    }).catch();
};
