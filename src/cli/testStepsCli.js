const inquirer = require('inquirer');
const { log } = require('console');
const config = require('../config/testStepsCli');
const documentApi = require('../api/document');

const poll = () => {
  log('Welcome to test steps generator');
  inquirer.prompt(config)
    .then(answer => documentApi.buildTemplate(answer, 'test_steps'));
};

module.exports = poll;
