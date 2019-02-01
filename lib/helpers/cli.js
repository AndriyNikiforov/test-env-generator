"use strict";/* eslint-disable class-methods-use-this */const figle=require("figlet"),{log,group,groupEnd}=require("console"),config=require("../config/info");/**
 * @class Cli
 */class Cli{constructor(){this.data=config.info}/**
   * @description Show version
   */versionInfo(){figle("TEG - qa tool",(a,b)=>{log(b),log("\t\t\t\t\t\t version 1.4")})}info(){group("SELENIUM"),log("\x1B[36m%s\x1B[0m",this.data.map(a=>a)),groupEnd()}}module.exports=new Cli;