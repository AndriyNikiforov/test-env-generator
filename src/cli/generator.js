const inquirer = require('inquirer');
const { exectArch } = require('../api/zip');

const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'Select the test skeleton to generate:',
    choices: ['selenium', 'appium', 'wdio'],
  },
];

module.exports = () => {
  inquirer.prompt(questions)
    .then((param) => {
      switch (param.type) {
        case 'selenium':
          exectArch('../assets/selblui.zip');
          break;
        case 'appium':
          exectArch('../assets/appiumwdblui.zip');
          break;
        case 'wdio':
          exectArch('../assets/selwdioblui.zip');
          break;
        default:
          break;
      }
    })
    .catch();
};
