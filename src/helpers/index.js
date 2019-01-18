const figle = require('figlet');
const chalk = require('chalk').default;
const dotenv = require('dotenv');
const Console = require('console');
const columify = require('columnify');

// Init env variables
dotenv.load();

// Show logo
const logo = () => figle('TEG - qa tool', (err, data) => {
  if (err) {
    Console.error('Something went wrong...');
    Console.dir(err);
    return;
  }

  Console.log(data);
});

const version = () => {
  Console.log(`version ${chalk.bgCyan(process.env.VERSION)}`);
};

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

module.exports = {
  logo,
  help,
  success,
  version,
};
