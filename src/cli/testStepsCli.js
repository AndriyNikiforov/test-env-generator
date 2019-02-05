const inquirer = require('inquirer');
const { log } = require('console');
const documentApi = require('../api/testSteps');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Test title:',
  },
  {
    type: 'input',
    name: 'data',
    message: 'Test data:',
  },
  {
    type: 'input',
    name: 'step1',
    message: 'Test step 1:',
  },
  {
    type: 'input',
    name: 'step2',
    message: 'Test step 2',
  },
  {
    type: 'input',
    name: 'step3',
    message: 'Test step 3',
  },
  {
    type: 'input',
    name: 'step4',
    message: 'Test step 4',
  },
  {
    type: 'input',
    name: 'step5',
    message: 'Test step 5',
  },
];

const poll = () => {
  log('Welcome to test steps generator');
  inquirer.prompt(questions)
    .then(answer => documentApi.buildTemplate(answer));
};

module.exports = poll;
