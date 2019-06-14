const { prompt } = require('inquirer');
const { emptyTemplateDoc, getTemplate } = require('../api/document');

const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'Select to generating template',
    choices: [
      'doc',
      'odt',
      'xlsx',
    ],
  },
];

module.exports = () => {
  prompt(questions)
    .then((data) => {
      switch (data.type) {
        case 'doc':
          emptyTemplateDoc('../assets/docs/test-case-template.doc', 'doc');
          break;
        case 'odt':
          emptyTemplateDoc('../assets/docs/test-case-template0.odt', 'odt');
          break;
        case 'xlsx':
          getTemplate();
          break;
        default:
          break;
      }
    });
};
