'use strict';

const unzip = require('adm-zip');

const appiumExt = (path) => {
  const zip = new unzip('./assets/appiumwdblui.zip');
  zip.extractAllTo(path, true);
};

const seleniumExt = (path) => {
  const zip = new unzip('./assets/selblui.zip');
  zip.extractAllTo(path, true);
};

const webdriverExt = (path) => {
  const zip = new unzip('./assets/selwdioblui.zip');
  zip.extractAllTo(path, true);
};

module.exports = {
  appiumExt: appiumExt,
  seleniumExt: seleniumExt,
  webdriverExt: webdriverExt
};
