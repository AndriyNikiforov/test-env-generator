const fs = require('fs-extra');
const chai = require('chai');
const Unzip = require('adm-zip');
const { resolve } = require('path');
const zipApi = require('../src/zipapi/');

describe('Test zip', () => {
  it('make zip', () => {
    zipApi.makeArch('./test/tmp');
    fs.access('./test/tmp.zip', (error) => {
      chai.assert.isNull(error);
      fs.remove('./test/tmp.zip');
    });
  });

  it('exect zip', () => {
    fs.mkdir('./test/ziptmp');
    const zip = new Unzip(resolve(__dirname, './selblui.zip'));
    zip.extractAllTo('./test/ziptmp', true);

    fs.access('./test/ziptmp/selblui/README.md', (err) => {
      chai.assert.isNull(err);
      fs.remove('./test/ziptmp');
    });
  });
});
