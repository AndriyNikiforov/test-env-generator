const { prompt } = require('inquirer');
const { error, log } = require('console');
const { resolve } = require('path');
const { copyFile } = require('fs-extra');

const path = '../assets/docker/';
const messageSuccess = ['\x1b[36m%s\x1b[0m', 'SUCCESS'];
const question = [
  {
    type: 'list',
    name: 'docker',
    message: 'Select doceker file',
    choices: ['simple', 'with noVNC', 'three node noVNC']
  }
];

module.exports = () => {
  prompt(question)
    .then((answer) => {
      switch (answer.docker) {
        case 'simple':
          copyFile(resolve(__dirname, path.concat('docker-compose-simple.yml')), 'qa-docker-compose.yml', (err) => {
            if (err) error(err);
            log(...messageSuccess);
          });
         break;
        case 'with noVNC':
          copyFile(resolve(__dirname, path.concat('docker-compose-novnc.yml')), 'qa-docker-compose.yml', (err) => {
            if (err) error(err);
            log(...messageSuccess);
          });
          break;
        case 'three node noVNC':
          copyFile(resolve(__dirname, path.concate('docker-compose.yml')), 'qa-docker-compose.yml', (err) => {
            if (err) error(err);
            log(...messageSuccess);
          });
          break;
      }
    });
};
