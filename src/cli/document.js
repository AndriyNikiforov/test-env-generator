const inquirer = require('inquirer');
const configCase = require('../config/testCaseCli');
const configSteps = require('../config/testStepsCli');
const documentApi = require('../api/document');

module.exports = {
  pollCase: () => {
    inquirer.prompt(configSteps)
      .then(answer => documentApi.buildTemplate(answer, 'test-steps'));
  },
  pollSteps: () => {
    inquirer.prompt(configCase)
      .then(answer => documentApi.buildTemplate(answer, 'test-case'));
  },
};
