const chalk = require('chalk');
const figle = require('figlet');
const Console = require('console');

// Show logo
const logo = () => figle('TEG - qa tool', (err, data) => {
  if (err) {
    Console.error('Something went wrong...');
    Console.dir(err);
    return;
  }

  Console.log(data);
});

// Show success message
const success = () => figle('Success', (err, data) => {
  if (err) {
    Console.error('Something went wrong...');
    Console.dir(err);
    return;
  }

  Console.log(data);
});

// Show help block
const help = () => {
  Console.log('');
  Console.log(chalk.default.gray.bold('Welcome to help manual'));
  Console.log(chalk.default.green('selenium'), '- generate selenium webdriver and standalone server');
  Console.log(chalk.default.yellow('webdriver.io'), '- generate webdriver.io skeleton with pom and standalone server');
  Console.log(chalk.default.cyan('appium'), '- generate  appium skeleton');
  Console.log('');
};

module.exports = {
  logo,
  help,
  success,
};
