const { prompt } = require('inquirer');
const { emptyTemplateDoc, getTemplate, move } = require('../api/files');

const question = [
  {
    type: 'list',
    name: 'docker',
    message: 'Select file to generate',
    choices: [
      'docker-simple', 'docker-with-noVNC',
      'chrome-config',
      'doc',
      'xlsx',
    ],
  },
];

module.exports = () => {
  prompt(question)
    .then((answer) => {
      switch (answer.docker) {
        case 'docker-simple':
          move('../assets/docker/docker-compose-simple.yml', 'qa-docker-compose.yml');
          break;
        case 'docker-with-noVNC':
          move('docker-compose-novnc.yml', 'qa-docker-compose.yml');
          break;
        case 'chrome-config':
          move('../assets/config/index.js', 'chrome.config.js');
          break;
        case 'doc':
          emptyTemplateDoc('../assets/docs/test-case-template.doc', 'doc');
          break;
        case 'xlsx':
          getTemplate();
          break;
        default:
          break;
      }
    });
};
