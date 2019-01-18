"use strict";var commander=require("commander"),_require=require("../generator/"),exectArch=_require.exectArch,_require2=require("../helpers/"),help=_require2.help,logo=_require2.logo,success=_require2.success;// Show tool name
// Show all tool commands
// Command for generate selenium skeleton
// Command for generate appium skeleton
// Command for generate webdriver.io skeleton
logo(),commander.version("1.0.0","-v, --version"),commander.on("--help",function(){return help()}),commander.command("selenium <path>").description("generate selenium skeleton").action(function(a){exectArch(a,"../assets/selblui.zip"),success()}),commander.command("appium <path>").description("generate appium skeleton").action(function(a){exectArch(a,"../assets/appiumwdblui.zip"),success()}),commander.command("webdriver.io <path>").description("generate webdriver.io skeleton").action(function(a){exectArch(a,"../assets/selwdioblui.zip"),success()}),module.exports=commander;