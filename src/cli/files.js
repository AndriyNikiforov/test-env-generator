const { prompt } = require('inquirer');
const { emptyTemplateDoc, getTemplate, move } = require('../api/files');
const { fileQuestion } = require('./config/');

const path = {
  doc: '../assets/docs/test-case-template.doc',
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
        case 'doc':
          emptyTemplateDoc(path.doc, 'doc');
          break;
        case 'xlsx':
          getTemplate();
          break;
        default: break;
      }
    });
};
