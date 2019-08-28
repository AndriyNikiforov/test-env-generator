const unzip = require('unzip');
const rimraf = require('rimraf');
const archiver = require('archiver');
const { log } = require('console');
const { mkdir, createWriteStream, createReadStream } = require('fs');

const errorResolver = (err) => {
  if (err) throw err;
  log('Success');
};

const exactArch = async (pathToArch) => {
  const readStream = createReadStream(pathToArch);

  await mkdir('./qa-skeleton', (err) => errorResolver(err));
  readStream.pipe(unzip.Extract({ path: './qa-skeleton' }));
};

const makeArch = async (name, folderName) => {
  const output = createWriteStream(`./${name}.zip`);
  const archive = archiver('zip', { zlib: { level: 9 } });

  archive.on('error', (err) => { throw err; });
  archive.pipe(output);
  archive.glob('**/*', { cwd: `./${folderName}` }, {});

  await archive.finalize();
  await rimraf(folderName, (error) => errorResolver(error));
};

module.exports = { exactArch, makeArch };
