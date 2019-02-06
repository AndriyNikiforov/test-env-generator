const commander = require('commander');
const cli = require('../helpers/cli');
const zipApi = require('../api/zip');
const gitApi = require('../api/git');
const testCaseGen = require('../api/document');
const testCaseCli = require('./testCaseCli');
const testStepsCli = require('./testStepsCli');

/**
 * @description Show version package
 */
commander
  .command('v')
  .description('beautifully version showed')
  .action(() => cli.versionInfo());

/**
 * @description  Show all tool commands
 */
commander
  .command('info')
  .description('information about options')
  .action(() => cli.info());

/**
 * @description Command generate test steps with your data
 */
commander
  .command('test-steps:doc')
  .description('generate test steps with your data')
  .action(() => testStepsCli());

/**
* @description Command generate test case with your data
*/
commander
  .command('utest-case:doc')
  .description('generate test case with your data')
  .action(() => testCaseCli());

/**
* @description Command generate test case template (.doc)
*/
commander
  .command('test-case:doc')
  .description('generate test case template (.doc)')
  .action(() => testCaseGen.emptyTemplateDoc('../assets/docs/test-case-template.doc', 'doc'));

commander
  .command('test-case:odt')
  .description('generate test case template (.odt)')
  .action(() => testCaseGen.emptyTemplateDoc('../assets/docs/test-case-template0.odt', 'odt'));

/**
 * @description Command git clone a last version of skeleton
 */
commander
  .command('selenium:last')
  .description('git clone the last version of selenium skeleton')
  .action(() => gitApi.cloneSkeleton('AndriyNikiforov/selblui'));

/**
 * @description Command git clone a last version of skeleton
 */
commander
  .command('appium:last')
  .description('git clone the last version of appium skeleton')
  .action(() => gitApi.cloneSkeleton('AndriyNikiforov/appiumwdblui'));

/**
 * @description Command git clone a last version of skeleton
 */
commander
  .command('webdriverIO:last')
  .description('git clone the last version of webdrtiver.io skeleton')
  .action(() => gitApi.cloneSkeleton('AndriyNikiforov/selwdioblui'));

/**
 * @description Command for generate selenium skeleton
 */
commander
  .command('selenium <path>')
  .description('generate selenium skeleton')
  .action(path => zipApi.exectArch('../assets/selblui.zip', path));

/**
 * @description Command for generate appium skeleton
 */
commander
  .command('appium <path>')
  .description('generate appium skeleton')
  .action(path => zipApi.exectArch('../assets/appiumwdblui.zip', path));

/**
 * @description Command for generate webdriver.io skeleton
 */
commander
  .command('webdriver.io <path>')
  .description('generate webdriver.io skeleton')
  .action(path => zipApi.exectArch('../assets/selwdioblui.zip', path));

module.exports = commander;
