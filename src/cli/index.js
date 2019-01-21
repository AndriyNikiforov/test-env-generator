const commander = require('commander');
const { exectArch } = require('../zipapi/');

const {
  webdriverIO,
  seleniumUpdate,
  appiumUpdate,
} = require('../api/git');

const {
  help,
  logo,
  success,
  version,
  gitVersion,
} = require('../helpers/cli');

// Show logo
logo();

// Show version package
commander
  .command('v')
  .description('beautifully version showed')
  .action(() => version());

// Show all tool commands
commander
  .command('info')
  .description('information about options')
  .action(() => help());

commander
  .command('git:version')
  .description('information about commands for generate git version skeleton')
  .action(() => gitVersion());

// Commands: git clone a last version of skeleton
commander
  .command('selenium:last <path>')
  .description('git clone the last version of selenium skeleton')
  .action(path => seleniumUpdate(path));

commander
  .command('appium:last <path>')
  .description('git clone the last version of appium skeleton')
  .action(path => appiumUpdate(path));

commander
  .command('webdriverIO:last <path>')
  .description('git clone the last version of webdrtiver.io skeleton')
  .action(path => webdriverIO(path));
// -------------------------------------------------------------------

// Command for generate selenium skeleton
commander
  .command('selenium <path>')
  .description('generate selenium skeleton')
  .action((path) => {
    exectArch(path, '../assets/selblui.zip');
    success();
  });

// Command for generate appium skeleton
commander
  .command('appium <path>')
  .description('generate appium skeleton')
  .action((path) => {
    exectArch(path, '../assets/appiumwdblui.zip');
    success();
  });

// Command for generate webdriver.io skeleton
commander
  .command('webdriver.io <path>')
  .description('generate webdriver.io skeleton')
  .action((path) => {
    exectArch(path, '../assets/selwdioblui.zip');
    success();
  });

module.exports = commander;
