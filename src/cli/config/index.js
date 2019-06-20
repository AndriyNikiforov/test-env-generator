module.exports = {
  gitQuestion: [
    {
      type: 'list',
      name: 'gitRepository',
      message: 'Select the test skeleton:',
      choices: ['selenium', 'appium', 'wdio', 'lighthouse'],
    },
  ],
  generatorQuestion: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the test skeleton to generate:',
      choices: [
        'selenium', 'appium',
        'selenium+jest', 'locus',
        'python+selenium',
      ],
    },
  ],
  fileQuestion: [
    {
      type: 'list',
      name: 'docker',
      message: 'Select file to generate',
      choices: [
        'docker-simple', 'docker-with-noVNC',
        'chrome-config',
        'doc',
        'xlsx',
      ],
    },
  ],
};
