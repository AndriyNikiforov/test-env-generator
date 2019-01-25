const fs = require('fs-extra');
const Unzip = require('adm-zip');
const { assert } = require('chai');
const { resolve } = require('path');
const zipApi = require('../src/api/zip');

const MAKE_ARCH_PATH = './test/tmp.zip';
const EXEC_ARCH_PATH = './test/ziptmp';

describe('Test zip', () => {
  it('make zip', () => {
    zipApi.makeArch('./test/tmp');
    fs.access(MAKE_ARCH_PATH, (error) => {
      assert.isNull(error);
      fs.remove(MAKE_ARCH_PATH);
    });
  });

  before(() => fs.mkdir(EXEC_ARCH_PATH));

  it('exect zip', () => {
    const zip = new Unzip(resolve(__dirname, './selblui.zip'));
    zip.extractAllTo(EXEC_ARCH_PATH, true);

    fs.access('./test/ziptmp/selblui/README.md', (err) => {
      assert.isNull(err);
      fs.remove(EXEC_ARCH_PATH);
    });
  });
});
