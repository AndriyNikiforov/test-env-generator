/* eslint-disable class-methods-use-this */
const { log } = require('console');
const { resolve } = require('path');
const { copyFile } = require('fs');

class Files {
  /**
   * Copy test-case template file to directory
   */
  async getTemplate() {
    await copyFile(resolve(__dirname, '../assets/docs/TEMPLATE_TEST_CASE.xlsx'),
      './test-template-table.xlsx', (err) => {
        if (err) throw new Error(err);
        log('Success');
      });
  }

  /**
   * Move file to directory
   * @param  {String}  fileName
   * @param  {String}  afterName
   * @return {Promise}
   */
  async move(fileName, afterName) {
    copyFile(resolve(__dirname, fileName), afterName,
      (err) => {
        if (err) throw new Error(err);
        log('Success');
      });
  }
}

module.exports = new Files();
