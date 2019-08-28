const unzip = require('unzip');
const rimraf = require('rimraf');
const archiver = require('archiver');
const { log } = require('console');
const { resolve } = require('path');
const { mkdir, createWriteStream, createReadStream } = require('fs');

const exactArch = async (pathToArch) => {
  const readStream = createReadStream(resolve(pathToArch));

  await mkdir('./qa-skeleton', (error) => {
    if (error) throw error;
  });

  readStream.pipe(unzip.Extract({ path: './qa-skeleton' }));
  log('Success');
};

const makeArch = async (name, folderName) => {
  const output = createWriteStream(`./${name}.zip`);
  const archive = archiver('zip', {
    zlib: { level: 9 },
  });

  archive.on('error', (err) => { throw err; });

  archive.pipe(output);
  archive.glob('**/*', {
    cwd: `./${folderName}`,
  }, {});

  await archive.finalize();

  await rimraf(folderName, (error) => {
    if (error) throw error;
    log('Success');
  });
};

module.exports = {
  exactArch,
  makeArch,
};
