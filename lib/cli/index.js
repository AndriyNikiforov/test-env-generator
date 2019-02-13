"use strict";const commander=require("commander"),{log}=require("console"),gitCli=require("./git"),templateCli=require("./template"),generator=require("./generator"),{pollCase,pollSteps}=require("./document"),showText=()=>{log((()=>{/*
 _____ _____ _____                          _              _
|_   _|  ___|  __ \                        | |            | |
  | | | |__ | |  \/  ______    __ _  __ _  | |_ ___   ___ | |
  | | |  __|| | __  |______|  / _` |/ _` | | __/ _ \ / _ \| |
  | | | |___| |_\ \          | (_| | (_| | | || (_) | (_) | |
  \_/ \____/ \____/           \__, |\__,_|  \__\___/ \___/|_|
                                 | |
                                 |_|
                                                 __     ____
                                                /  |   / ___|
                                        __   __ `| |  / /___
                                        \ \ / /  | |  | ___ \
                                         \ V /  _| |__| \_/ |
                                          \_/   \___(_)_____/
    */}).toString()// eslint-disable-next-line no-useless-escape
.replace(/^[^\/]+\/\*!?/,"")// eslint-disable-next-line no-useless-escape
.replace(/\*\/[^\/]+$/,""))};/**
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
 */commander.command("v").description("beautifully version showed").action(()=>showText()),commander.command("test-steps:doc").description("generate test steps with your data").action(()=>pollSteps()),commander.command("utest-case:doc").description("generate test case with your data").action(()=>pollCase()),commander.command("git:cli").description("call git cli for generate skeleton from git repository").action(()=>gitCli()),commander.command("test-case:cli").description("call test-case template cli for generate doc files").action(()=>templateCli()),commander.command("test:gen").description("call cli for generate skeleton").action(()=>generator()),module.exports=commander;