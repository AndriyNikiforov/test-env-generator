const Unzip = require('adm-zip');

const { error } = require('console');
const { assert } = require('chai');
const { resolve } = require('path');
const { access, remove, mkdir } = require('fs-extra');

const zipApi = require('../src/api/zip');

const EXEC_ARCH_PATH = './test/ziptmp';

describe('Test zip', () => {
  before(() => mkdir(EXEC_ARCH_PATH));

  it('executing zip', () => {
    const zip = new Unzip(resolve(__dirname, '../lib/assets/selblui.zip'));
    zip.extractAllToAsync(EXEC_ARCH_PATH, true, (err) => {
      if (err) error('ERROR: ',err);

      access('./test/ziptmp/selblui/README.md', (err) => {
        assert.isNull(err);
        remove(EXEC_ARCH_PATH);
      });
    });
  });
});
