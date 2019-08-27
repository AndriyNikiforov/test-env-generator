const Unzip = require('adm-zip');
const rimraf = require('rimraf');
const { log } = require('console');
const { mkdir } = require('fs');
const { resolve } = require('path');

const exactArch = async (pathToArch) => {
  const zip = new Unzip(resolve(__dirname, pathToArch));

  await mkdir('./qa-skeleton', (error) => {
    if (error) throw error;
  });

  await zip.extractAllToAsync('./qa-skeleton', true, (error) => {
    if (error) throw error;
  });
};

const makeArch = async (name, folderName) => {
  const zip = new Unzip();

  await zip.addLocalFolder(folderName, './');
  await zip.writeZip(`${name}.zip`);
  await rimraf(folderName, (error) => {
    if (error) throw error;
    log('Success');
  });
};

module.exports = {
  exactArch,
  makeArch,
};
