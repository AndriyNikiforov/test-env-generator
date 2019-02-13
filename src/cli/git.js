const inquirer = require('inquirer');
const { cloneSkeleton } = require('../api/git');

const question = [
  {
    type: 'list',
    name: 'gitRepo',
    message: 'Select the test skeleton:',
    choices: ['selenium', 'appium', 'wdio'],
  },
];

module.exports = () => {
  inquirer.prompt(question)
    .then((answer) => {
      switch (answer.gitRepo) {
        case 'selenium':
          cloneSkeleton('https://github.com/AndriyNikiforov/selblui.git', 'selblui');
          break;
        case 'appium':
          cloneSkeleton('https://github.com/AndriyNikiforov/appiumwdblui.git', 'appiumwdblui');
          break;
        case 'wdio':
          cloneSkeleton('https://github.com/AndriyNikiforov/selwdioblui.git', 'selwdioblui');
          break;
        default:
          break;
      }
    });
};
