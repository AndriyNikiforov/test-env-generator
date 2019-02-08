"use strict";const commander=require("commander"),figle=require("figlet"),{log,group,groupEnd}=require("console"),zipApi=require("../api/zip"),gitCli=require("./git"),templateCli=require("./template"),{pollCase,pollSteps}=require("./document");/**
 * @description Show version package
 */ /**
 * @description  Show all tool commands
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
 */commander.command("v").description("beautifully version showed").action(()=>figle("TEG - qa tool",(a,b)=>{log(b),log("\t\t\t\t\t\t version 1.4")})),commander.command("info").description("information about options").action(()=>{group("SELENIUM"),log("\x1B[36m%s\x1B[0m","selenium <path> \t\t generate selenium webdriver and standalone server"),log("\x1B[36m%s\x1B[0m","selenium:last \t\t generate zip file with git version skeleton \n"),groupEnd(),group("Appium"),log("\x1B[35m","appium <path> \t\t generate  appium skeleton"),log("\x1B[35m","appium:last \t\t\t generate zip file with git version skeleton \n"),groupEnd(),group("Webdriver.IO"),log("\x1B[32m","webdriverIO <path> \t\t generate webdriver.io skeleton with pom and standalone server"),log("\x1B[32m","webdriverIO:last \t\t generate zip file with git version skeleton \n"),groupEnd(),group("Test case"),log("test-case:doc \t\t  generate test case template (.doc)"),log("test-case:odt \t\t  generate test case template (.odt)"),log("utest-case:doc \t\t  generate test case with your data \n"),groupEnd(),group("Test steps"),log("test-steps:doc \t\t generate test steps with your data"),groupEnd()}),commander.command("test-steps:doc").description("generate test steps with your data").action(()=>pollSteps()),commander.command("utest-case:doc").description("generate test case with your data").action(()=>pollCase()),commander.command("git:cli").description("call git cli for generate skeleton").action(()=>gitCli()),commander.command("test-case:cli").description("call test-case template cli for generate doc files").action(()=>templateCli()),commander.command("selenium <path>").description("generate selenium skeleton").action(a=>zipApi.exectArch("../assets/selblui.zip",a)),commander.command("appium <path>").description("generate appium skeleton").action(a=>zipApi.exectArch("../assets/appiumwdblui.zip",a)),commander.command("webdriver.io <path>").description("generate webdriver.io skeleton").action(a=>zipApi.exectArch("../assets/selwdioblui.zip",a)),module.exports=commander;