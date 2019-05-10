const clone = require('download-git-repo');

const { error } = require('console');
const { assert } = require('chai');
const { mkdir, access, remove } = require('fs-extra');

describe('Test git api', () => {
  before(() => mkdir('./test/tmp'));

  it('test clone repository', async () => {
    await clone('AndriyNikiforov/appiumwdblui', './test/tmp', (err) => {
      if (err) error(err);
      access('./test/tmp/README.md', error => assert.isNull(error));
      remove('./test/tmp');
    });
  });
});
