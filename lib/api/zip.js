"use strict";/* eslint-disable class-methods-use-this */const fs=require("fs-extra"),Unzip=require("adm-zip"),{resolve}=require("path"),{error,log}=require("console");/**
 * @class Zip
 */class Zip{/**
   * @description Execute zip archive
   * @param {String} pathToArch
   */async exectArch(a){const b=new Unzip(resolve(__dirname,a));await fs.mkdir("./qa-skeleton"),await b.extractAllTo("./qa-skeleton",!0)}/**
   * @description Make zip archive
   * @param {String} name
   */async makeArch(a,b){const c=new Unzip;await c.addLocalFolder(b,"./"),await c.writeZip(`${a}.zip`),await fs.remove(b,a=>{a&&error(a),log("EXCELLENT")})}}module.exports=new Zip;