const { log } = require('console');
const { prompt } = require('inquirer');
const { buildTemplate, emptyTemplateDoc, getTemplate } = require('../api/document');

const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'Select the operation',
    choices: [
      'test-case',
      'test-steps',
      'generate-doc-template',
      'generate-odt-template',
      'generate-xlsx-template',
    ],
  },
];

const configCase = [
  {
    type: 'input',
    name: 'fileName',
    message: 'File name:',
  },
  {
    type: 'input',
    name: 'projectName',
    message: 'Project name:',
  },
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
    name: 'testExpectRes',
    message: 'Expected results:',
  },
  {
    type: 'input',
    name: 'testDescription',
    message: 'Test description',
  },
  {
    type: 'input',
    name: 'testExecDate',
    message: 'Test execution date',
  },
  {
    type: 'input',
    name: 'testDesignedDate',
    message: 'Test designed date',
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
            .then(answer => buildTemplate(answer, 'test-steps'));
          break;
        case 'test-case':
          prompt(configCase)
            .then(answer => buildTemplate(answer, 'test-case'));
          break;
        case 'generate-doc-template':
          emptyTemplateDoc('../assets/docs/test-case-template.doc', 'doc');
          break;
        case 'generate-odt-template':
          emptyTemplateDoc('../assets/docs/test-case-template0.odt', 'odt');
          break;
        case 'generate-xlsx-template':
          getTemplate();
          break;
        default:
          log('Something error');
          break;
      }
    });
};
