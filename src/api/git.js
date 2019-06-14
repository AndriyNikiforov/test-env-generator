const { spawn } = require('child_process');
const { error } = require('console');
const { makeArch } = require('./zip');

/**
 * Start process cloning repository from github
 * @param {String} address
 * @param {String} folderName
 */
const cloneSkeleton = (address, folderName) => {
  const process = spawn('git', ['clone', address]);
  process.on('close', () => makeArch('skeleton', folderName));
  process.on('error', err => error(err));
};

module.exports = cloneSkeleton;
