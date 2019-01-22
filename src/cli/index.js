const zipApi = require('../zipapi/');
const gitApi = require('../api/git');
const commander = require('commander');

const {
  help,
  logo,
  success,
  version,
  gitVersion,
} = require('../helpers/cli');

/**
 * @description Show logo
 */
logo();

/**
 * @description Show version package
 */
commander
  .command('v')
  .description('beautifully version showed')
  .action(() => version());

/**
 * @description  Show all tool commands
 */
commander
  .command('info')
  .description('information about options')
  .action(() => help());

/**
 * @description Show information about commands for generate git version skeleton
 */
commander
  .command('git:version')
  .description('information about commands for generate git version skeleton')
  .action(() => gitVersion());

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
    success();
  });

/**
 * @description Command for generate appium skeleton
 */
commander
  .command('appium <path>')
  .description('generate appium skeleton')
  .action((path) => {
    zipApi.exectArch('../assets/appiumwdblui.zip', path);
    success();
  });

/**
 * @description Command for generate webdriver.io skeleton
 */
commander
  .command('webdriver.io <path>')
  .description('generate webdriver.io skeleton')
  .action((path) => {
    zipApi.exectArch('../assets/selwdioblui.zip', path);
    success();
  });

module.exports = commander;
