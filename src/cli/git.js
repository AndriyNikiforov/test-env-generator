const { prompt } = require('inquirer');
const cloneSkeleton = require('../api/git');
const { gitQuestion } = require('./config/');

const address = {
  selenium: 'https://github.com/AndriyNikiforov/selblui.git',
  appium: 'https://github.com/AndriyNikiforov/appiumwdblui.git',
  wdio: 'https://github.com/AndriyNikiforov/selwdioblui.git',
  lighthouse: 'https://github.com/AndriyNikiforov/lighthouse-tempalate.git',
};

module.exports = () => {
  prompt(gitQuestion)
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
        case 'lighthouse':
          cloneSkeleton(address.lighthouse, 'lighthouse-tempalate');
          break;
        default:
          break;
      }
    });
};
