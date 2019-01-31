/* eslint-disable class-methods-use-this */
const fs = require('fs-extra');
const { error, log } = require('console');
const { resolve } = require('path');

class Document {
  buildTemplate(data) {

  }

  emptyTemplateDoc(path, format) {
    fs.copyFile(resolve(__dirname, path), `./test-case-template.${format}`, (err) => {
      if (err) error(err);
      log('\x1b[36m%s\x1b[0m', 'SUCCESS');
    });
  }
}

module.exports = new Document();
