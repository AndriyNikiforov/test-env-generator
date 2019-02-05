/* eslint-disable class-methods-use-this */
const figle = require('figlet');
const { log, group, groupEnd } = require('console');
const config = require('../config/info');

/**
 * @class Cli
 */
class Cli {
  constructor() {
    this.data = config.info;
  }

  /**
   * @description Show version
   */
  versionInfo() {
    figle('TEG - qa tool', (err, data) => {
      log(data);
      log('\t\t\t\t\t\t version 1.4');
    });
  }

  info() {
    group('SELENIUM');
    log('\x1b[36m%s\x1b[0m', 'selenium <path> \t\t generate selenium webdriver and standalone server');
    log('\x1b[36m%s\x1b[0m', 'selenium:last \t\t generate zip file with git version skeleton');
    groupEnd();

    group('Appium');
    log('\x1b[35m', 'appium <path> \t\t generate  appium skeleton');
    log('\x1b[35m', 'appium:last \t\t\t generate zip file with git version skeleton');
    groupEnd();

    group('Webdriver.IO');
    log('\x1b[32m', 'webdriverIO <path> \t\t generate webdriver.io skeleton with pom and standalone server');
    log('\x1b[32m', 'webdriverIO:last \t\t generate zip file with git version skeleton');
    groupEnd();

    group('Test case');
    log('test-case:doc \t\t  generate test case template (.doc)');
    log('test-case:odt \t\t  generate test case template (.odt)');
    log('utest-case:doc \t\t  generate test case with your data');
    groupEnd();

    group('Test steps');
    log('test-steps:doc \t\t generate test steps with your data');
    groupEnd();
  }
}

module.exports = new Cli();
