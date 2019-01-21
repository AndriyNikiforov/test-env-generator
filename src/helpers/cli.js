const figle = require('figlet');
const chalk = require('chalk').default;
const dotenv = require('dotenv');
const Console = require('console');
const columify = require('columnify');

// Init env variables
dotenv.load();

/**
 * @description Show logo
 */
const logo = () => figle('TEG - qa tool', (err, data) => {
  if (err) {
    Console.error('Something went wrong...');
    Console.dir(err);
    return;
  }

  Console.log(data);
});

/**
 * @description Show version
 */
const version = () => {
  Console.log(`Version: ${chalk.cyan(process.env.VERSION)}`);
};

/**
 * @description Show success message
 */
const success = () => figle('Success', (err, data) => {
  if (err) {
    Console.error('Something went wrong...');
    Console.dir(err);
    return;
  }

  Console.log(data);
});

/**
 * @description Show help block
 */
const help = () => {
  const columns = columify([
    {
      command: chalk.cyan('selenium'),
      about: chalk.cyan('generate selenium webdriver and standalone server'),
    },
    {
      command: chalk.green('appium'),
      about: chalk.green('generate  appium skeleton'),
    },
    {
      command: chalk.blue('webdriver.io'),
      about: chalk.blue('generate webdriver.io skeleton with pom and standalone server'),
    },
  ]);

  Console.log(columns);
};

/**
 * @description Show information about commands for generate git version skeleton
 */
const gitVersion = () => {
  const columns = columify([
    {
      command: chalk.cyan('selenium:last <path to generate>'),
      about: chalk.cyan('generate zip file with git version skeleton'),
    },
    {
      command: chalk.green('appium:last <path to generate>'),
      about: chalk.green('generate zip file with git version skeleton'),
    },
    {
      command: chalk.blue('webdriverIO:last <path to generate>'),
      about: chalk.blue('generate zip file with git version skeleton'),
    },
  ]);

  Console.log(columns);
};

module.exports = {
  logo,
  help,
  success,
  version,
  gitVersion,
};
