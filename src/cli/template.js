const inquirer = require('inquirer');
const testCaseGen = require('../api/document');

const question = [
  {
    type: 'list',
    name: 'type',
    message: 'Select the test skeleton:',
    choices: ['doc', 'odt'],
  },
];

module.exports = () => {
  inquirer.prompt(question)
    .then((answer) => {
      switch (answer.type) {
        case 'doc':
          testCaseGen.emptyTemplateDoc('../assets/docs/test-case-template.doc', 'doc');
          break;
        case 'odt':
          testCaseGen.emptyTemplateDoc('../assets/docs/test-case-template0.odt', 'odt');
          break;
        default:
          break;
      }
    });
};
