const { spawn } = require('child_process');
const { prompt } = require('inquirer');
const { makeArch } = require('../api/zip');
const { gitQuestion } = require('./config/');

const address = {
  locus: 'https://github.com/AndriyNikiforov/locust-simple-skeleton.git',
  appium: 'https://github.com/AndriyNikiforov/appiumwdblui.git',
  selenium: 'https://github.com/AndriyNikiforov/selblui.git',
  lighthouse: 'https://github.com/AndriyNikiforov/lighthouse-tempalate.git',
};

const cloneSkeleton = (address, folderName) => {
  const process = spawn('git', ['clone', address]);
  process.on('close', () => makeArch('skeleton', folderName));
  process.on('error', (err) => { throw err; });
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
        case 'lighthouse':
          cloneSkeleton(address.lighthouse, 'lighthouse-tempalate');
          break;
        case 'locus':
          cloneSkeleton(address.locus, 'locust-simple-skeleton');
          break;
        default: break;
      }
    });
};
