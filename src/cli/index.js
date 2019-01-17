const chalk = require('chalk');
const figle = require('figlet');
const commander = require('commander');
const Console = require('console');

const { seleniumExt, appiumExt, webdriverExt } = require('../generator/');

// Show tool name
figle('TEG - qa tool', (err, data) => {
  if (err) {
    Console.error('Something went wrong...');
    Console.dir(err);
    return;
  }

  Console.log(data);
});

commander
  .version('1.0.0', '-v, --version');

// Show all tool commands
commander.on('--help', () => {
  Console.log('');
  Console.log(chalk.default.gray.bold('Welcome to help manual'));
  Console.log(chalk.default.green('selenium'), '- generate selenium webdriver and standalone server');
  Console.log(chalk.default.yellow('webdriver.io'), '- generate webdriver.io skeleton with pom and standalone server');
  Console.log(chalk.default.cyan('appium'), '- generate  appium skeleton');
  Console.log('');
});

// Command for generate selenium skeleton
commander
  .command('selenium <path>')
  .description('generate selenium skeleton')
  .action(path => seleniumExt(path));

// Command for generate appium skeleton
commander
  .command('appium <path>')
  .description('generate appium skeleton')
  .action(path => appiumExt(path));

// Command for generate webdriver.io skeleton
commander
  .command('webdriver.io <path>')
  .description('generate webdriver.io skeleton')
  .action(path => webdriverExt(path));

figle('Success', (err, data) => {
  if (err) {
    Console.error('Something went wrong...');
    Console.dir(err);
    return;
  }

  Console.log(data);
});

module.exports = commander;
