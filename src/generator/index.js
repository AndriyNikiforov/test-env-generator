const Unzip = require('adm-zip');
const { resolve } = require('path');

const exectArch = (pathArch, pathToExt) => {
  const zip = new Unzip(resolve(__dirname, pathArch));
  zip.extractAllTo(pathToExt, true);
};

module.exports = {
  exectArch,
};
