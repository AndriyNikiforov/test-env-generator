const fs = require('fs-extra');
const officegen = require('officegen');
const { resolve, join } = require('path');
const { error, log } = require('console');
const {
  table,
  tableStyle,
  config,
  projectTextConfig,
} = require('../config/testCase');

class Document {
  constructor() {
    this.docx = officegen(config);
    this.messageSuccess = ['\x1b[36m%s\x1b[0m', 'SUCCESS'];
  }

  async buildTemplate(data, type) {
    const tableContent = table(data);
    const out = fs.createWriteStream(join('./', `${data.fileName}_${type}.docx`));
    let pObject = this.docx.createP();

    pObject.addText(data.projectName, projectTextConfig);
    pObject = this.docx.createTable(tableContent, tableStyle);

    out.on('error', err => error(err));
    out.on('close', () => log(...this.messageSuccess));

    this.docx.on('error', err => error(err));
    await this.docx.generate(out);
  }

  async emptyTemplateDoc(pathToClone, format) {
    await fs.copyFile(resolve(__dirname, pathToClone), `./test-case-template.${format}`, (err) => {
      if (err) error(err);
      log(...this.messageSuccess);
    });
  }
}

module.exports = new Document();
