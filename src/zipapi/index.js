const Unzip = require('adm-zip');
const rimraf = require('rimraf');
const Console = require('console');
const zipFolder = require('zip-folder');
const { resolve } = require('path');

/**
 * @description Execute zip archive
 * @param {String} pathArch
 * @param {String} pathToExt
 */
const exectArch = (pathArch, pathToExt) => {
  const zip = new Unzip(resolve(__dirname, pathArch));
  zip.extractAllTo(pathToExt, true);
};

/**
 * @description Make zip archive
 * @param {String} path
 * @param {String} name
 */
const makeArch = (path, name) => {
  zipFolder(path, `./${name}.zip`, (err) => {
    if (err) Console.log(err);
    rimraf(path, (error) => { if (error) Console.log(error); });
    Console.log('EXCELLENT');
  });
};

module.exports = {
  exectArch,
  makeArch,
};
