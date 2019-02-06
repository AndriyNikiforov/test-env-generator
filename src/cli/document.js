const inquirer = require('inquirer');
const { log } = require('console');
const configCase = require('../config/testCaseCli');
const configSteps = require('../config/testStepsCli');
const documentApi = require('../api/document');

const pollSteps = () => {
  log('Welcome to test steps generator');
  inquirer.prompt(configSteps)
    .then(answer => documentApi.buildTemplate(answer, 'test_steps'));
};

const pollCase = () => {
  log('Welcome to test case generator');
  inquirer.prompt(configCase)
    .then(answer => documentApi.buildTemplate(answer, 'test-case'));
};

module.exports = {
  pollCase,
  pollSteps,
};
