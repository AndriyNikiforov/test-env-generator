const { prompt } = require('inquirer');
const { resolve } = require('path');
const { copyFile } = require('fs-extra');
const { error, log } = require('console');

const path = '../assets/docker/';
const messageSuccess = ['\x1b[36m%s\x1b[0m', 'SUCCESS'];
const question = [
  {
    type: 'list',
    name: 'docker',
    message: 'Select doceker file',
    choices: ['simple', 'with noVNC', 'three node noVNC'],
  },
];

const move = fileName => copyFile(resolve(__dirname, path.concat(fileName)), 'qa-docker-compose.yml',
  (err) => {
    if (err) error(err);
    log(...messageSuccess);
  });

module.exports = () => {
  prompt(question)
    .then((answer) => {
      switch (answer.docker) {
        case 'simple':
          move('docker-compose-simple.yml');
          break;
        case 'with noVNC':
          move('docker-compose-novnc.yml');
          break;
        case 'three node noVNC':
          move('docker-compose.yml');
          break;
        default:
          log('Pleas try again');
          break;
      }
    });
};
