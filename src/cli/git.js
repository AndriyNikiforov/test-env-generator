const inquirer = require('inquirer');
const gitApi = require('../api/git');

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
          gitApi.cloneSkeleton('AndriyNikiforov/selblui');
          break;
        case 'appium':
          gitApi.cloneSkeleton('AndriyNikiforov/appiumwdblui');
          break;
        case 'wdio':
          gitApi.cloneSkeleton('AndriyNikiforov/selwdioblui');
          break;
        default:
          break;
      }
    });
};
