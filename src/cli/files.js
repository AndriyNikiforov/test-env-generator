const { prompt } = require('inquirer');
const { resolve } = require('path');
const { copyFile } = require('fs-extra');
const { error, log } = require('console');

const question = [
  {
    type: 'list',
    name: 'docker',
    message: 'Select file to generate',
    choices: ['docker-simple', 'docker-with-noVNC', 'docker-three-node-noVNC', 'chrome-config'],
  },
];

const move = (fileName, afterName) => copyFile(resolve(__dirname, fileName), afterName,
  (err) => {
    if (err) error(err);
    log('Success');
  });

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
        case 'docker-three-node-noVNC':
          move('docker-compose.yml', 'qa-docker-compose.yml');
          break;
        case 'chrome-config':
          move('../assets/config/index.js', 'chrome.config.js');
          break;
        default:
          log('Pleas try again');
          break;
      }
    });
};
