const cloneSkeleton = require('../lib/api/git');
const { assert } = require('chai');
const { mkdir, access, remove } = require('fs-extra');

describe('Test git api', () => {
  before(() => mkdir('./test/tmp'));

  it('test clone repository', async () => {
    await cloneSkeleton('https://github.com/AndriyNikiforov/appiumwdblui.git', 'appiumwdblui').then((err) => {
      if (err) throw err;
      access('./test/tmp/README.md', (error) => { assert.isNull(error) });
      remove('./test/tmp');
    });
  });
});
