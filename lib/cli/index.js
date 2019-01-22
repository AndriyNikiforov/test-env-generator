"use strict";var zipApi=require("../zipapi/"),gitApi=require("../api/git"),commander=require("commander"),_require=require("../helpers/cli"),help=_require.help,logo=_require.logo,success=_require.success,version=_require.version,gitVersion=_require.gitVersion;/**
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
 */ /**
 * @description Command for generate appium skeleton
 */ /**
 * @description Command for generate webdriver.io skeleton
 */logo(),commander.command("v").description("beautifully version showed").action(function(){return version()}),commander.command("info").description("information about options").action(function(){return help()}),commander.command("git:version").description("information about commands for generate git version skeleton").action(function(){return gitVersion()}),commander.command("selenium:last <path>").description("git clone the last version of selenium skeleton").action(function(a){return gitApi.seleniumUpdate(a)}),commander.command("appium:last <path>").description("git clone the last version of appium skeleton").action(function(a){return gitApi.appiumUpdate(a)}),commander.command("webdriverIO:last <path>").description("git clone the last version of webdrtiver.io skeleton").action(function(a){return gitApi.webdriverIO(a)}),commander.command("selenium <path>").description("generate selenium skeleton").action(function(a){zipApi.makeArch("../assets/selblui.zip",a),success()}),commander.command("appium <path>").description("generate appium skeleton").action(function(a){zipApi.makeArch("../assets/appiumwdblui.zip",a),success()}),commander.command("webdriver.io <path>").description("generate webdriver.io skeleton").action(function(a){zipApi.makeArch("../assets/selwdioblui.zip",a),success()}),module.exports=commander;