const { prompt } = require('inquirer');
const { exactArch } = require('../api/zip');
const { generatorQuestion } = require('./config/');

module.exports = () => {
  prompt(generatorQuestion)
    .then((param) => {
      switch (param.type) {
        case 'selenium':
          exactArch('../assets/selblui.zip');
          break;
        case 'appium':
          exactArch('../assets/appiumwdblui.zip');
          break;
        case 'selenium+jest':
          exactArch('../assets/selje.zip');
          break;
        case 'python+selenium':
          exactArch('../assets/pyT.zip');
          break;
        default:
          break;
      }
    }).catch();
};
