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

const address = {
  selenium: 'https://github.com/AndriyNikiforov/selblui.git',
  appium: 'https://github.com/AndriyNikiforov/appiumwdblui.git',
  wdio: 'https://github.com/AndriyNikiforov/selwdioblui.git',
};

module.exports = () => {
  prompt(question)
    .then((answer) => {
      switch (answer.gitRepository) {
        case 'selenium':
          cloneSkeleton(address.selenium, 'selblui');
          break;
        case 'appium':
          cloneSkeleton(address.appium, 'appiumwdblui');
          break;
        case 'wdio':
          cloneSkeleton(address.wdio, 'selwdioblui');
          break;
        default:
          break;
      }
    });
};
