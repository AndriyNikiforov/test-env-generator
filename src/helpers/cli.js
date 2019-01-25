/* eslint-disable class-methods-use-this */
const figle = require('figlet');
const chalk = require('chalk').default;
const columify = require('columnify');
const { log, error, dir } = require('console');

/**
 * @class Cli
 */
class Cli {
  /**
  * @description Show logo
  */
  showLogo(text) {
    figle(text, (err, data) => {
      if (err) {
        error('Something went wrong...');
        dir(err);
        return;
      }

      log(data);
    });
  }

  /**
  * @description Show help block
  */
  help() {
    const columns = columify([
      {
        command: chalk.cyan('selenium <path>'),
        about: chalk.cyan('generate selenium webdriver and standalone server'),
      },
      {
        command: chalk.green('appium <path>'),
        about: chalk.green('generate  appium skeleton'),
      },
      {
        command: chalk.blue('webdriver.io <path>'),
        about: chalk.blue('generate webdriver.io skeleton with pom and standalone server'),
      },
    ]);

    log(columns);
  }

  version() {
    log(`version ${chalk.cyan('1.3')}`);
  }

  /**
  * @description Show information about commands for generate git version skeleton
  */
  gitVersion() {
    const columns = columify([
      {
        command: chalk.cyan('selenium:last'),
        about: chalk.cyan('generate zip file with git version skeleton'),
      },
      {
        command: chalk.green('appium:last'),
        about: chalk.green('generate zip file with git version skeleton'),
      },
      {
        command: chalk.blue('webdriverIO:last'),
        about: chalk.blue('generate zip file with git version skeleton'),
      },
    ]);

    log(columns);
  }
}

module.exports = new Cli();
