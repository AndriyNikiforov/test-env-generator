"use strict";const commander=require("commander"),figle=require("figlet"),{log}=require("console"),zipApi=require("../api/zip"),gitCli=require("./git"),templateCli=require("./template"),{pollCase,pollSteps}=require("./document");/**
 * @description Show version package
 */ /**
 * @description Command generate test steps with your data
 */ /**
* @description Command generate test case with your data
*/ /**
 * @description Command call git cli interface
 */ /**
 * @description Command call test case cli interface
 */ /**
 * @description Command for generate selenium skeleton
 */ /**
 * @description Command for generate appium skeleton
 */ /**
 * @description Command for generate webdriver.io skeleton
 */commander.command("v").description("beautifully version showed").action(()=>figle("TEG - qa tool",(a,b)=>{log(b),log("\x1B[36m%s\x1B[0m","\t\t\t\t\t\t version 1.4")})),commander.command("test-steps:doc").description("generate test steps with your data").action(()=>pollSteps()),commander.command("utest-case:doc").description("generate test case with your data").action(()=>pollCase()),commander.command("git:cli").description("call git cli for generate skeleton from git repository").action(()=>gitCli()),commander.command("test-case:cli").description("call test-case template cli for generate doc files").action(()=>templateCli()),commander.command("selenium <path>").description("generate selenium skeleton").action(a=>zipApi.exectArch("../assets/selblui.zip",a)),commander.command("appium <path>").description("generate appium skeleton").action(a=>zipApi.exectArch("../assets/appiumwdblui.zip",a)),commander.command("webdriver.io <path>").description("generate webdriver.io skeleton").action(a=>zipApi.exectArch("../assets/selwdioblui.zip",a)),module.exports=commander;