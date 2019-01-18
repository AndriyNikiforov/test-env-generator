const commander = require('commander');

const { exectArch } = require('../generator/');
const {
  help,
  logo,
  success,
} = require('../helpers/');

// Show tool name
logo();

commander
  .version('1.0.0', '-v, --version');

// Show all tool commands
commander.on('--help', () => help());

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
