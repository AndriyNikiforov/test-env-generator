const { prompt } = require('inquirer');
const { exactArch } = require('../api/zip');
const { generatorQuestion } = require('./config/');

const path = {
  appium: '../assets/appiumwdblui.zip',
  seleniumJest: '../assets/selje.zip',
  pythonSelenium: '../assets/pyT.zip',
};

module.exports = () => {
  prompt(generatorQuestion)
    .then((param) => {
      switch (param.type) {
        case 'selenium':
          exactArch(path.seleniumJest);
          break;
        case 'appium':
          exactArch(path.appium);
          break;
        case 'python+selenium':
          exactArch(path.pythonSelenium);
          break;
        default: break;
      }
    }).catch();
};
