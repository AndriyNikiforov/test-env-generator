/* eslint-disable class-methods-use-this */
const figle = require('figlet');
const { log, group, groupEnd } = require('console');

/**
 * @class Cli
 */
class Cli {
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
    log('\x1b[36m%s\x1b[0m', 'selenium:last \t\t generate zip file with git version skeleton \n');
    groupEnd();

    group('APPIUM');
    log('\x1b[33m%s\x1b[0m', 'appium <path> \t\t generate  appium skeleton');
    log('\x1b[33m%s\x1b[0m', 'appium:last \t\t\t generate zip file with git version skeleton \n');
    groupEnd();

    group('WEBDRIVE.IO');
    log('\x1b[32m%s\x1b[0m', 'webdriverIO <path> \t\t generate webdriver.io skeleton with pom and standalone server');
    log('\x1b[32m%s\x1b[0m', 'webdriverIO:last \t\t generate zip file with git version skeleton');
    groupEnd();

    group('TEST CASE DOCUMENTATION');
    log('\x1b[33m%s\x1b[0m', 'test-case:doc \t\t  generate test case template (.doc)');
    log('\x1b[33m%s\x1b[0m', 'test-case:odt \t\t  generate test case template (.odt)');
    log('\x1b[33m%s\x1b[0m', 'utest-case:doc \t\t  generate test case with your data');
    groupEnd();
  }
}

module.exports = new Cli();
