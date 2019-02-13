"use strict";const commander=require("commander"),figle=require("figlet"),{log}=require("console"),gitCli=require("./git"),templateCli=require("./template"),generator=require("./generator"),{pollCase,pollSteps}=require("./document");/**
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
 * @description Command call cli for generate skeleton
 */commander.command("v").description("beautifully version showed").action(()=>figle("TEG - qa tool",(a,b)=>{log(b),log("\x1B[36m%s\x1B[0m","\t\t\t\t\t\t version 1.4")})),commander.command("test-steps:doc").description("generate test steps with your data").action(()=>pollSteps()),commander.command("utest-case:doc").description("generate test case with your data").action(()=>pollCase()),commander.command("git:cli").description("call git cli for generate skeleton from git repository").action(()=>gitCli()),commander.command("test-case:cli").description("call test-case template cli for generate doc files").action(()=>templateCli()),commander.command("test:gen").description("call cli for generate skeleton").action(()=>generator()),module.exports=commander;