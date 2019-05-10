"use strict";/* eslint-disable no-useless-escape */const commander=require("commander"),{log}=require("console"),gitCli=require("./git"),generatorCli=require("./generator"),documentCli=require("./document"),showText=()=>{log((()=>{/*
 _____ _____ _____                          _              _
|_   _|  ___|  __ \                        | |            | |
  | | | |__ | |  \/  ______    __ _  __ _  | |_ ___   ___ | |
  | | |  __|| | __  |______|  / _` |/ _` | | __/ _ \ / _ \| |
  | | | |___| |_\ \          | (_| | (_| | | || (_) | (_) | |
  \_/ \____/ \____/           \__, |\__,_|  \__\___/ \___/|_|
                                 | |
                                 |_|
                                                 __    _____
                                                /  |  |  _  |
                                         __   __`| |   \ V /
                                         \ \ / / | |   / _ \
                                          \ V / _| |__| |_| |
                                           \_/  \___(_)_____/


*/}).toString().replace(/^[^\/]+\/\*!?/,"").replace(/\*\/[^\/]+$/,""))};commander.command("v").description("version").action(()=>showText()),commander.command("doc:gen").description("Command generate documents").action(()=>documentCli()),commander.command("git:cli").description("call git cli for generate skeleton from git repository").action(()=>gitCli()),commander.command("test:gen").description("call cli for generate skeleton").action(()=>generatorCli()),module.exports=commander;