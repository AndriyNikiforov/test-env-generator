const { log } = require('console');
const { prompt } = require('inquirer');
const { exactArch } = require('../api/zip');

const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'Select the test skeleton to generate:',
    choices: [
      'selenium',
      'appium',
      'wdio',
      'selenium+jest',
      'locus',
    ],
  },
];

module.exports = () => {
  prompt(questions)
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
        case 'selenium+jest':
          exactArch('../assets/selje.zip');
          break;
        case 'locus':
          exactArch('../assets/locus.zip');
          break;
        default:
          log('Something error');
          break;
      }
    })
    .catch();
};
