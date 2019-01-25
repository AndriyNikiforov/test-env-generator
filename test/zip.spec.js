const fs = require('fs-extra');
const Unzip = require('adm-zip');
const { error } = require('console');
const { assert } = require('chai');
const { resolve } = require('path');
const zipApi = require('../src/api/zip');

const MAKE_ARCH_PATH = './test/tmp.zip';
const EXEC_ARCH_PATH = './test/ziptmp';

describe('Test zip', () => {
  it('make zip', async () => {
   await zipApi.makeArch('./test/tmp');
   await fs.access(MAKE_ARCH_PATH, (error) => {
      assert.isNull(error);
      fs.remove(MAKE_ARCH_PATH);
    });
  });

  before(() => fs.mkdir(EXEC_ARCH_PATH));

  it('executing zip', () => {
    const zip = new Unzip(resolve(__dirname, './selblui.zip'));
    zip.extractAllToAsync(EXEC_ARCH_PATH, true, (err) => {
      if (err) error('ERROR: ',err);

      fs.access('./test/ziptmp/selblui/README.md', (err) => {
        assert.isNull(err);
        fs.remove(EXEC_ARCH_PATH);
      });
    });
  });
});
