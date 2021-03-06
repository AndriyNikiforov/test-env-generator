module.exports = {
  fileQuestion: [
    {
      type: 'list',
      name: 'docker',
      message: 'Select file to generate',
      choices: [
        'docker-simple', 'docker-with-noVNC',
        'chrome-config', 'test-case-xlsx',
      ],
    },
  ],
  generatorQuestion: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the test skeleton to generate:',
      choices: ['selenium', 'appium', 'python-selenium'],
    },
  ],
  gitQuestion: [
    {
      type: 'list',
      name: 'gitRepository',
      message: 'Select the test skeleton:',
      choices: ['selenium', 'appium', 'lighthouse', 'locus'],
    },
  ],
  gitUserQuestion: [
    {
      type: 'input',
      name: 'gitUserRepository',
      message: 'Put url to git repository',
    },
  ],
};
