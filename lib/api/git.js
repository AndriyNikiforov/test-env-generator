"use strict";const fs=require("fs-extra"),download=require("download-git-repo"),{log}=require("console"),zipApi=require("./zip");/**
 * @class GitApi
 */class GitApi{constructor(){this.colors={cyan:"\x1B[36m%s\x1B[0m",magenta:"\x1B[35m"},this.makeArch=zipApi.makeArch,this.userArch=zipApi.makeUserArch}/**
   * @description Clone repository and make zip archive
   * @param {String} address
   */async cloneSkeleton(a){await fs.mkdir("./tmp"),await download(a,"./tmp",a=>{a&&log(this.colors.magenta,a),log(this.colors.cyan,"Cloned"),this.makeArch("skeleton")})}}module.exports=new GitApi;