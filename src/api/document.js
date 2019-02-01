/* eslint-disable class-methods-use-this */
const fs = require('fs-extra');
const path = require('path');
const officegen = require('officegen');
const { resolve } = require('path');
const { error, log } = require('console');
const { table, tableStyle } = require('../config/');

class Document {
  buildTemplate(data) {
    const out = fs.createWriteStream(path.join('./', 'test_case.docx'));
    const tableContent = table(data);

    const docx = officegen({
      type: 'docx',
      orientation: 'portrait',
      pageMargins: {
        top: 1000,
        left: 1000,
        right: 1000,
        bottom: 1000,
      },
    });

    let pObject = docx.createP();

    out.on('error', err => error(err));
    out.on('close', () => log('\x1b[32m%s\x1b[0m', 'SUCCESS'));
    docx.on('error', err => error(err));

    pObject.addText(data.projectName, {
      font_size: 28,
      bold: true,
      align: 'left',
    });
    pObject = docx.createTable(tableContent, tableStyle);

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
