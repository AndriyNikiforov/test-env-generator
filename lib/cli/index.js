"use strict";const commander=require("commander"),cli=require("../helpers/cli"),zipApi=require("../api/zip"),gitApi=require("../api/git");/**
 * @description Show version package
 */ /**
 * @description  Show all tool commands
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
 */commander.command("v").description("beautifully version showed").action(()=>cli.version()),commander.command("info").description("information about options").action(()=>cli.info()),commander.command("selenium:last").description("git clone the last version of selenium skeleton").action(()=>gitApi.cloneSkeleton("AndriyNikiforov/selblui")),commander.command("appium:last").description("git clone the last version of appium skeleton").action(()=>gitApi.cloneSkeleton("AndriyNikiforov/appiumwdblui")),commander.command("webdriverIO:last").description("git clone the last version of webdrtiver.io skeleton").action(()=>gitApi.cloneSkeleton("AndriyNikiforov/selwdioblui")),commander.command("selenium <path>").description("generate selenium skeleton").action(a=>zipApi.exectArch("../assets/selblui.zip",a)),commander.command("appium <path>").description("generate appium skeleton").action(a=>zipApi.exectArch("../assets/appiumwdblui.zip",a)),commander.command("webdriver.io <path>").description("generate webdriver.io skeleton").action(a=>zipApi.exectArch("../assets/selwdioblui.zip",a)),module.exports=commander;