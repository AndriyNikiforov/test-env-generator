const commander = require('commander');
const { exectArch } = require('../generator/');
const {
  help,
  logo,
  success,
  version,
} = require('../helpers/');

// Show logo
logo();

commander
  .command('v')
  .description('beautifully version showed')
  .action(() => version());

// Show all tool commands
commander
  .command('info')
  .description('information about options')
  .action(() => help());

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
