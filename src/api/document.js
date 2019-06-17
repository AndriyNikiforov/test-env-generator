/* eslint-disable class-methods-use-this */
const { log } = require('console');
const { resolve } = require('path');
const { copyFile } = require('fs-extra');

class Document {
  /**
   * Copy template to directory
   * @param {String} pathToClone
   * @param {String} format
   */
  async emptyTemplateDoc(pathToClone, format) {
    await copyFile(resolve(__dirname, pathToClone), `./test-case-template.${format}`, (err) => {
      if (err) throw new Error(err);
      log('Success');
    });
  }

  /**
   * Copy test-case template file to directory
   */
  async getTemplate() {
    await copyFile(resolve(__dirname, '../assets/docs/TEMPLATE_TEST_CASE.xlsx'), './test-template-table.xlsx', (err) => {
      if (err) throw new Error(err);
      log('Success');
    });
  }
}

module.exports = new Document();
