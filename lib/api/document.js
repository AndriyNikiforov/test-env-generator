"use strict";const fs=require("fs-extra"),officegen=require("officegen"),{resolve,join}=require("path"),{error,log}=require("console"),{table,tableStyle,config,projectTextConfig}=require("../config/testCase");class Document{constructor(){this.docx=officegen(config),this.messageSuccess=["\x1B[36m%s\x1B[0m","SUCCESS"]}async buildTemplate(a,b){const c=table(a),d=fs.createWriteStream(join("./",`${a.fileName}_${b}.docx`));let e=this.docx.createP();e.addText(a.projectName,projectTextConfig),e=this.docx.createTable(c,tableStyle),d.on("error",a=>error(a)),d.on("close",()=>log(...this.messageSuccess)),this.docx.on("error",a=>error(a)),await this.docx.generate(d)}async emptyTemplateDoc(a,b){await fs.copyFile(resolve(__dirname,a),`./test-case-template.${b}`,a=>{a&&error(a),log(...this.messageSuccess)})}}module.exports=new Document;