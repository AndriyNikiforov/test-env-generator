const { prompt } = require('inquirer');
const configCase = require('../config/testCaseCli');
const documentApi = require('../api/document');

const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'Select the operation',
    choices: [
      'test-steps',
      'test-case',
      'generate-doc-template',
      'generate-odt-template',
      'generate-xlsx-template',
    ],
  },
];

const configSteps = [
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

module.exports = () => {
  prompt(questions)
    .then((data) => {
      switch (data.type) {
        case 'test-steps':
          prompt(configSteps)
            .then(answer => documentApi.buildTemplate(answer, 'test-steps'));
          break;
        case 'test-case':
          prompt(configCase)
            .then(answer => documentApi.buildTemplate(answer, 'test-case'));
          break;
        case 'generate-doc-template':
          documentApi.emptyTemplateDoc('../assets/docs/test-case-template.doc', 'doc');
          break;
        case 'generate-odt-template':
          documentApi.emptyTemplateDoc('../assets/docs/test-case-template0.odt', 'odt');
          break;
        case 'generate-xlsx-template':
          documentApi.getTemplate();
          break;
        default:
          break;
      }
    });
};
