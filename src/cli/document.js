const inquirer = require('inquirer');
const configCase = require('../config/testCaseCli');
const configSteps = require('../config/testStepsCli');
const documentApi = require('../api/document');

const pollSteps = () => {
  inquirer.prompt(configSteps)
    .then(answer => documentApi.buildTemplate(answer, 'test-steps'));
};

const pollCase = () => {
  inquirer.prompt(configCase)
    .then(answer => documentApi.buildTemplate(answer, 'test-case'));
};

module.exports = {
  pollCase,
  pollSteps,
};
