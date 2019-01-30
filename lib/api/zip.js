"use strict";/* eslint-disable class-methods-use-this */const fs=require("fs-extra"),Unzip=require("adm-zip"),{resolve}=require("path"),{error,log}=require("console");/**
 * @class Zip
 */class Zip{/**
   * @description Execute zip archive
   * @param {String} pathToArch
   * @param {String} pathToExt
   */async exectArch(a,b){log(resolve(__dirname,a));const c=new Unzip(resolve(__dirname,a));await c.extractAllTo(b,!0)}/**
   * @description Make zip archive
   * @param {String} name
   */async makeArch(a){const b=new Unzip;await b.addLocalFolder("./tmp","./"),await b.writeZip(`${a}.zip`),await fs.remove("./tmp",a=>{a&&error(a),log("EXCELLENT")})}}module.exports=new Zip;