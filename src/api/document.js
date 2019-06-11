const { error, log } = require('console');
const { resolve } = require('path');
const { copyFile } = require('fs-extra');

class Document {
  // eslint-disable-next-line class-methods-use-this
  async emptyTemplateDoc(pathToClone, format) {
    await copyFile(resolve(__dirname, pathToClone), `./test-case-template.${format}`, (err) => {
      if (err) error(err);
      log('Success');
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async getTemplate() {
    await copyFile(resolve(__dirname, '../assets/docs/TEMPLATE_TEST_CASE.xlsx'), './test-template-table.xlsx', (err) => {
      if (err) error(err);
      log('Success');
    });
  }
}

module.exports = new Document();
