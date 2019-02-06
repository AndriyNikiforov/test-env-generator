const commander = require('commander');
const cli = require('../helpers/cli');
const zipApi = require('../api/zip');
const gitCli = require('./git');
const templateCli = require('./template');
const { pollCase, pollSteps } = require('./document');

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
  .action(() => pollSteps());

/**
* @description Command generate test case with your data
*/
commander
  .command('utest-case:doc')
  .description('generate test case with your data')
  .action(() => pollCase());

commander
  .command('test-case:cli')
  .description('call test-case template cli for generate doc files')
  .action(() => templateCli());

commander
  .command('git:cli')
  .description('call git cli for generate skeleton')
  .action(() => gitCli());

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
