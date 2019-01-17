'use strict';

const unzip = require('adm-zip');

const appiumExt = (path) => {
  const zip = new unzip('./assets/appiumwdblui.zip');
  zip.extractAllTo(path, true);

  console.log('Success');
};

const seleniumExt = (path) => {
  const zip = new unzip('./assets/selblui.zip');
  zip.extractAllTo(path, true);

  console.log('Success');
};

const webdriverExt = (path) => {
  const zip = new unzip('./assets/selwdioblui.zip');
  zip.extractAllTo(path, true);

  console.log('Success');
};

module.exports = {
  appiumExt: appiumExt,
  seleniumExt: seleniumExt,
  webdriverExt: webdriverExt
};
