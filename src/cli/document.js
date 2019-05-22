const { log } = require('console');
const { prompt } = require('inquirer');
const { emptyTemplateDoc, getTemplate } = require('../api/document');

const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'Select the operation',
    choices: [
      'generate-doc-template',
      'generate-odt-template',
      'generate-xlsx-template',
    ],
  },
];

module.exports = () => {
  prompt(questions)
    .then((data) => {
      switch (data.type) {
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
