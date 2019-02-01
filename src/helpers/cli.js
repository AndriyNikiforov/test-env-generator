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
    log('\x1b[36m%s\x1b[0m', this.data.map(elements => elements));
    groupEnd();
  }
}

module.exports = new Cli();
