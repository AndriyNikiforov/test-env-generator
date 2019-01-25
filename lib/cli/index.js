"use strict";var commander=require("commander"),cli=require("../helpers/cli"),zipApi=require("../api/zip"),gitApi=require("../api/git");/**
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
 */commander.command("v").description("beautifully version showed").action(function(){return cli.version()}),commander.command("info").description("information about options").action(function(){return cli.help()}),commander.command("git:version").description("information about commands for generate git version skeleton").action(function(){return cli.gitVersion()}),commander.command("selenium:last").description("git clone the last version of selenium skeleton").action(function(){return gitApi.cloneSkeleton("https://github.com/AndriyNikiforov/selblui.git")}),commander.command("appium:last").description("git clone the last version of appium skeleton").action(function(){return gitApi.cloneSkeleton("https://github.com/AndriyNikiforov/appiumwdblui.git")}),commander.command("webdriverIO:last").description("git clone the last version of webdrtiver.io skeleton").action(function(){return gitApi.cloneSkeleton("https://github.com/AndriyNikiforov/selwdioblui.git")}),commander.command("selenium <path>").description("generate selenium skeleton").action(function(a){return zipApi.exectArch("../assets/selblui.zip",a)}),commander.command("appium <path>").description("generate appium skeleton").action(function(a){return zipApi.exectArch("../assets/appiumwdblui.zip",a)}),commander.command("webdriver.io <path>").description("generate webdriver.io skeleton").action(function(a){return zipApi.exectArch("../assets/selwdioblui.zip",a)}),module.exports=commander;