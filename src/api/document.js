/* eslint-disable class-methods-use-this */
const fs = require('fs-extra');
const path = require('path');
const officegen = require('officegen');
const { resolve } = require('path');
const { error, log } = require('console');
const {
  table,
  tableStyle,
  config,
  projectTextConfig,
} = require('../config/');

class Document {
  buildTemplate(data) {
    const out = fs.createWriteStream(path.join('./', 'test_case.docx'));
    const docx = officegen(config);
    const tableContent = table(data);

    let pObject = docx.createP();

    pObject.addText(data.projectName, projectTextConfig);
    pObject = docx.createTable(tableContent, tableStyle);

    out.on('error', err => error(err));
    out.on('close', () => log('\x1b[32m%s\x1b[0m', 'SUCCESS'));

    docx.on('error', err => error(err));
    docx.generate(out);
  }

  emptyTemplateDoc(pathToClone, format) {
    fs.copyFile(resolve(__dirname, pathToClone), `./test-case-template.${format}`, (err) => {
      if (err) error(err);
      log('\x1b[36m%s\x1b[0m', 'SUCCESS');
    });
  }
}

module.exports = new Document();
