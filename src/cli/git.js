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
          cloneSkeleton('AndriyNikiforov/selblui');
          break;
        case 'appium':
          cloneSkeleton('AndriyNikiforov/appiumwdblui');
          break;
        case 'wdio':
          cloneSkeleton('AndriyNikiforov/selwdioblui');
          break;
        default:
          break;
      }
    });
};
