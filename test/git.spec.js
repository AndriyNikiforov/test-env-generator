const fs = require('fs-extra');
const chai = require('chai');
const Git = require('nodegit');
const { error } = require('console');

describe('Test git api', () => {
  before(() => fs.mkdir('./test/tmp'));

  it('test clone repository', () => {
    Git.Clone('https://github.com/AndriyNikiforov/appiumwdblui.git', './test/tmp')
    .then((repository) => {
      fs.access('./test/tmp/README.md', (err) => {
        chai.assert.isNull(err);
      });

      fs.remove('./test/tmp');
    })
    .catch(err => error(err));
  });
});
