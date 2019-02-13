const inquirer = require('inquirer');
const configCase = require('../config/testCaseCli');
const configSteps = require('../config/testStepsCli');
const documentApi = require('../api/document');

const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'Select the operation',
    choices: ['test-steps', 'test-case', 'generate-doc-template', 'generate-odt-template'],
  },
];

module.exports = () => {
  inquirer.prompt(questions)
    .then((data) => {
      switch (data.type) {
        case 'test-steps':
          inquirer.prompt(configSteps)
            .then(answer => documentApi.buildTemplate(answer, 'test-steps'));
          break;
        case 'test-case':
          inquirer.prompt(configCase)
            .then(answer => documentApi.buildTemplate(answer, 'test-case'));
          break;
        case 'generate-doc-template':
          documentApi.emptyTemplateDoc('../assets/docs/test-case-template.doc', 'doc');
          break;
        case 'generate-odt-template':
          documentApi.emptyTemplateDoc('../assets/docs/test-case-template0.odt', 'odt');
          break;
        default:
          break;
      }
    });
};
