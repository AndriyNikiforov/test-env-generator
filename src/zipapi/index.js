const Unzip = require('adm-zip');
const rimraf = require('rimraf');
const Console = require('console');
const zipFolder = require('zip-folder');
const { resolve } = require('path');

// Execute zip archive
const exectArch = (pathArch, pathToExt) => {
  const zip = new Unzip(resolve(__dirname, pathArch));
  zip.extractAllTo(pathToExt, true);
};

// Make zip archive
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
