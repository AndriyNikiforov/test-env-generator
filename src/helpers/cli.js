const figle = require('figlet');
const chalk = require('chalk').default;
const columify = require('columnify');
const { log, error, dir } = require('console');

/**
 * @description Show logo
 */
const logo = () => figle('TEG - qa tool', (err, data) => {
  if (err) {
    error('Something went wrong...');
    dir(err);
    return;
  }

  log(data);
});

/**
 * @description Show version
 */
const version = () => {
  log(`Version: ${chalk.cyan('1.3')}`);
};

/**
 * @description Show success message
 */
const success = () => figle('Success', (err, data) => {
  if (err) {
    error('Something went wrong...');
    dir(err);
    return;
  }

  log(data);
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

  log(columns);
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

  log(columns);
};

module.exports = {
  logo,
  help,
  success,
  version,
  gitVersion,
};
