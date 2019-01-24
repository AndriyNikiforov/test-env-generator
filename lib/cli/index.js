"use strict";var commander=require("commander"),zipApi=require("../zipapi/"),gitApi=require("../api/git"),docApi=require("../api/doc"),cli=require("../helpers/cli");/**
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
 */ /**
* @description Command for generate test case template
*/cli.logo(),commander.command("v").description("beautifully version showed").action(function(){return cli.version()}),commander.command("info").description("information about options").action(function(){return cli.help()}),commander.command("git:version").description("information about commands for generate git version skeleton").action(function(){return cli.gitVersion()}),commander.command("selenium:last").description("git clone the last version of selenium skeleton").action(function(){return gitApi.seleniumUpdate()}),commander.command("appium:last").description("git clone the last version of appium skeleton").action(function(){return gitApi.appiumUpdate()}),commander.command("webdriverIO:last").description("git clone the last version of webdrtiver.io skeleton").action(function(){return gitApi.webdriverIO()}),commander.command("selenium <path>").description("generate selenium skeleton").action(function(a){zipApi.exectArch("../assets/selblui.zip",a),cli.success()}),commander.command("appium <path>").description("generate appium skeleton").action(function(a){zipApi.exectArch("../assets/appiumwdblui.zip",a),cli.success()}),commander.command("webdriver.io <path>").description("generate webdriver.io skeleton").action(function(a){zipApi.exectArch("../assets/selwdioblui.zip",a),cli.success()}),commander.command("doc:tc").description("generate test case template").action(function(){return docApi.makeFile()}),module.exports=commander;