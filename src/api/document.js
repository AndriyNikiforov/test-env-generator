const officegen = require('officegen');
const { error, log } = require('console');
const { resolve, join } = require('path');
const { createWriteStream, copyFile } = require('fs-extra');

const {
  table, tableStyle, config, projectTextConfig,
} = require('../config/testCase');

class Document {
  constructor() {
    this.docx = officegen(config);
    this.pObject = this.docx.createP();
    this.copyPath = '../assets/docs/TEMPLATE_TEST_CASE.xlsx';
    this.messageSuccess = ['\x1b[36m%s\x1b[0m', 'SUCCESS'];
  }

  async buildTemplate(data, type) {
    const out = createWriteStream(join('./', `${data.fileName || 'file'}_${type}.docx`));
    const tableContent = table(data);

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

  async getTemplate() {
    copyFile(resolve(__dirname, this.copyPath), './test-template-table.xlsx', (err) => {
      if (err) error(err);
      log(...this.messageSuccess);
    });
  }
}

module.exports = new Document();
