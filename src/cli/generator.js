const inquirer = require('inquirer');
const { exactArch } = require('../api/zip');

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
          exactArch('../assets/selblui.zip');
          break;
        case 'appium':
          exactArch('../assets/appiumwdblui.zip');
          break;
        case 'wdio':
          exactArch('../assets/selwdioblui.zip');
          break;
        default:
          break;
      }
    })
    .catch();
};
