const fs = require('fs-extra');
const chai = require('chai');
const clone = require('download-git-repo');
const { error } = require('console');

describe('Test git api', () => {
  before(() => fs.mkdir('./test/tmp'));

  it('test clone repository', async () => {
    await clone('AndriyNikiforov/appiumwdblui', './test/tmp', (err) => {
      if (err) error(err);

      fs.access('./test/tmp/README.md', (error) => {
        chai.assert.isNull(error);
      });

      fs.remove('./test/tmp');
    });
  });
});
