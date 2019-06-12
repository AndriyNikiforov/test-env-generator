const { prompt } = require('inquirer');
const cloneSkeleton = require('../api/git');

const question = [
  {
    type: 'list',
    name: 'gitRepository',
    message: 'Select the test skeleton:',
    choices: ['selenium', 'appium', 'wdio'],
  },
];

module.exports = () => {
  prompt(question)
    .then((answer) => {
      switch (answer.gitRepository) {
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
