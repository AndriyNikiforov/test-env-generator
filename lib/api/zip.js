"use strict";/* eslint-disable class-methods-use-this */const Unzip=require("adm-zip"),{resolve}=require("path"),{error,log}=require("console"),{mkdir,remove}=require("fs-extra");/**
 * @class Zip
 */class Zip{/**
   * @description Execute zip archive
   * @param {String} pathToArch
   */async exactArch(a){const b=new Unzip(resolve(__dirname,a));await mkdir("./qa-skeleton"),await b.extractAllTo("./qa-skeleton",!0)}/**
   * @description Make zip archive
   * @param {String} name
   */async makeArch(a,b){const c=new Unzip;await c.addLocalFolder(b,"./"),await c.writeZip(`${a}.zip`),await remove(b,a=>{a&&error(a),log("EXCELLENT")})}}module.exports=new Zip;