const commander = require('commander');
const cli = require('../helpers/cli');
const zipApi = require('../api/zip');
const gitApi = require('../api/git');

/**
 * @description Show logo
 */
cli.showLogo('TEG - qa tool');

/**
 * @description Show version package
 */
commander
  .command('v')
  .description('beautifully version showed')
  .action(() => cli.version());

/**
 * @description  Show all tool commands
 */
commander
  .command('info')
  .description('information about options')
  .action(() => cli.help());

/**
 * @description Show information about commands for generate git version skeleton
 */
commander
  .command('git:version')
  .description('information about commands for generate git version skeleton')
  .action(() => cli.gitVersion());

/**
 * @description Command git clone a last version of skeleton
 */
commander
  .command('selenium:last')
  .description('git clone the last version of selenium skeleton')
  .action(() => gitApi.seleniumUpdate());

/**
 * @description Command git clone a last version of skeleton
 */
commander
  .command('appium:last')
  .description('git clone the last version of appium skeleton')
  .action(() => gitApi.appiumUpdate());

/**
 * @description Command git clone a last version of skeleton
 */
commander
  .command('webdriverIO:last')
  .description('git clone the last version of webdrtiver.io skeleton')
  .action(() => gitApi.webdriverIO());

/**
 * @description Command for generate selenium skeleton
 */
commander
  .command('selenium <path>')
  .description('generate selenium skeleton')
  .action((path) => {
    zipApi.exectArch('../assets/selblui.zip', path);
    cli.showLogo('Success');
  });

/**
 * @description Command for generate appium skeleton
 */
commander
  .command('appium <path>')
  .description('generate appium skeleton')
  .action((path) => {
    zipApi.exectArch('../assets/appiumwdblui.zip', path);
    cli.showLogo('Success');
  });

/**
 * @description Command for generate webdriver.io skeleton
 */
commander
  .command('webdriver.io <path>')
  .description('generate webdriver.io skeleton')
  .action((path) => {
    zipApi.exectArch('../assets/selwdioblui.zip', path);
    cli.showLogo('Success');
  });

module.exports = commander;
