"use strict";var commander=require("commander"),_require=require("../zipapi/"),exectArch=_require.exectArch,_require2=require("../api/git"),webdriverIO=_require2.webdriverIO,seleniumUpdate=_require2.seleniumUpdate,appiumUpdate=_require2.appiumUpdate,_require3=require("../helpers/cli"),help=_require3.help,logo=_require3.logo,success=_require3.success,version=_require3.version,gitVersion=_require3.gitVersion;/**
 * @description Show logo
 */ /**
 * @description Show version package
 */ /**
 * @description  Show all tool commands
 */ /**
 * @description Show information about commands for generate git version skeleton
 */ /**
 * @description Command git clone a last version of skeleton
 */ /**
 * @description Command git clone a last version of skeleton
 */ /**
 * @description Command git clone a last version of skeleton
 */ /**
 * @description Command for generate selenium skeleton
 */ // Command for generate appium skeleton
/**
 * @description Command for generate webdriver.io skeleton
 */logo(),commander.command("v").description("beautifully version showed").action(function(){return version()}),commander.command("info").description("information about options").action(function(){return help()}),commander.command("git:version").description("information about commands for generate git version skeleton").action(function(){return gitVersion()}),commander.command("selenium:last <path>").description("git clone the last version of selenium skeleton").action(function(a){return seleniumUpdate(a)}),commander.command("appium:last <path>").description("git clone the last version of appium skeleton").action(function(a){return appiumUpdate(a)}),commander.command("webdriverIO:last <path>").description("git clone the last version of webdrtiver.io skeleton").action(function(a){return webdriverIO(a)}),commander.command("selenium <path>").description("generate selenium skeleton").action(function(a){exectArch("../assets/selblui.zip",a),success()}),commander.command("appium <path>").description("generate appium skeleton").action(function(a){exectArch("../assets/appiumwdblui.zip",a),success()}),commander.command("webdriver.io <path>").description("generate webdriver.io skeleton").action(function(a){exectArch("../assets/selwdioblui.zip",a),success()}),module.exports=commander;