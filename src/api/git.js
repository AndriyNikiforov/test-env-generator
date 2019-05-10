const { error } = require('console');
const { spawn } = require('child_process');
const { makeArch } = require('./zip');

module.exports = {
  cloneSkeleton: async (address, folderName) => {
    const process = await spawn('git', ['clone', address]);
    process.on('close', () => makeArch('skeleton', folderName));
    process.on('error', err => error(err));
  },
};
