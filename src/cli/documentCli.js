const inquirer = require('inquirer');
const { log } = require('console');

log('Welcome to test case generator');

const questions = [
  {
    type: 'input',
    name: 'testDesignedBy',
    message: 'Test designed by:',
  },
  {
    type: 'input',
    name: 'testTitle',
    message: 'Test title',
  },
  {
    type: 'input',
    name: 'testPriority',
    message: 'Test priority:',
  },
  {
    type: 'input',
    name: 'testDesignedDate',
    message: 'Test designed date',
    validate: (value) => {
      const date = value.match('^d{1,2}/d{1,2}/d{4}$');

      if (date) {
        return true;
      }

      return 'Pleas enter a valid date';
    },
  },
  {
    type: 'input',
    name: 'testDescription',
    message: 'Test description',
    validate: (value) => {
      if (value.length() === 250) return true;

      return 'Pleas remove unnecessary text';
    },
  },
];

const poll = () => {
  inquirer.prompt(questions)
    .then((answer) => {
      log('Your data');
      log(answer);
    });
};

module.exports = poll;
