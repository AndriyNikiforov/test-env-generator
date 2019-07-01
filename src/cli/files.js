const { prompt } = require('inquirer');
const { fileQuestion } = require('./config/');
const { getTemplate, move } = require('../api/files');

const path = {
  dockerNoVNC: '../assets/docker/docker-compose-novnc.yml',
  dockerSimple: '../assets/docker/docker-compose-simple.yml',
  chromeConfig: '../assets/config/index.js',
};

module.exports = () => {
  prompt(fileQuestion)
    .then((answer) => {
      switch (answer.docker) {
        case 'docker-simple':
          move(path.dockerSimple, 'qa-docker-compose.yml');
          break;
        case 'docker-with-noVNC':
          move(path.dockerNoVNC, 'qa-docker-compose.yml');
          break;
        case 'chrome-config':
          move(path.chromeConfig, 'chrome.config.js');
          break;
        case 'test-case-xlsx':
          getTemplate();
          break;
        default: break;
      }
    });
};
