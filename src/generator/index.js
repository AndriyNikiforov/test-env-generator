'use strict';

const unzip = require('adm-zip');
const { resolve } = require('path');

const appiumExt = (path) => {
  const zip = new unzip(resolve(__dirname, '../assets/appiumwdblui.zip'));
  zip.extractAllTo(path, true);
};

const seleniumExt = (path) => {
  const zip = new unzip(resolve(__dirname, '../assets/selblui.zip'));
  zip.extractAllTo(path, true);
};

const webdriverExt = (path) => {
  const zip = new unzip(resolve(__dirname, '../assets/selwdioblui.zip'));
  zip.extractAllTo(path, true);
};

module.exports = {
  appiumExt: appiumExt,
  seleniumExt: seleniumExt,
  webdriverExt: webdriverExt
};
