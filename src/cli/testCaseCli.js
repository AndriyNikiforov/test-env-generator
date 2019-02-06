const inquirer = require('inquirer');
const { log } = require('console');
const config = require('../config/testCaseCli');
const documentApi = require('../api/document');

const poll = () => {
  log('Welcome to test case generator');
  inquirer.prompt(config)
    .then(answer => documentApi.buildTemplate(answer, 'test-case'));
};

module.exports = poll;
