const fs = require('fs-extra');
const download = require('download-git-repo');
const { log } = require('console');
const { makeArch } = require('./zip');

const cloneSkeleton = async (address) => {
  await fs.mkdir('./tmp');

  await download(address, './tmp', (err) => {
    if (err) log('\x1b[35m', err);
    log('\x1b[36m%s\x1b[0m', 'Cloned');
    makeArch('skeleton');
  });
};

module.exports = cloneSkeleton;
