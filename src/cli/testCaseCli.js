const inquirer = require('inquirer');
const { log } = require('console');
const config = require('../config/testCaseCli');
const documentApi = require('../api/testCase');

const poll = () => {
  log('Welcome to test case generator');
  inquirer.prompt(config)
    .then(answer => documentApi.buildTemplate(answer));
};

module.exports = poll;
