const officegen = require('officegen');
const { resolve, join } = require('path');
const { error, log } = require('console');
const { createWriteStream, copyFile } = require('fs-extra');

const {
  table,
  tableStyle,
  config,
  projectTextConfig,
} = require('../config/testCase');

class Document {
  constructor() {
    this.docx = officegen(config);
    this.pObject = this.docx.createP();
    this.messageSuccess = ['\x1b[36m%s\x1b[0m', 'SUCCESS'];
  }

  async buildTemplate(data, type) {
    const tableContent = table(data);
    const out = createWriteStream(join('./', `${data.fileName}_${type}.docx`));

    this.pObject.addText(data.projectName, projectTextConfig);
    this.pObject = this.docx.createTable(tableContent, tableStyle);

    out.on('error', err => error(err));
    out.on('close', () => log(...this.messageSuccess));

    this.docx.on('error', err => error(err));
    await this.docx.generate(out);
  }

  async emptyTemplateDoc(pathToClone, format) {
    await copyFile(resolve(__dirname, pathToClone), `./test-case-template.${format}`, (err) => {
      if (err) error(err);
      log(...this.messageSuccess);
    });
  }
}

module.exports = new Document();
