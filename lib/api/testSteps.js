"use strict";const fs=require("fs-extra"),officegen=require("officegen"),{resolve,join}=require("path"),{error,log}=require("console"),{table,tableStyle,config,projectTextConfig}=require("../config/testSteps");class Document{constructor(){this.docx=officegen(config),this.messageSuccess=["\x1B[36m%s\x1B[0m","SUCCESS"]}async buildTemplate(a){const b=table(a),c=fs.createWriteStream(join("./",`${a.title}_test_steps.docx`));let d=this.docx.createP();d.addText(a.projectName,projectTextConfig),d=this.docx.createTable(b,tableStyle),c.on("error",a=>error(a)),c.on("close",()=>log(...this.messageSuccess)),this.docx.on("error",a=>error(a)),await this.docx.generate(c)}async emptyTemplateDoc(a,b){await fs.copyFile(resolve(__dirname,a),`./test-steps-template.${b}`,a=>{a&&error(a),log(...this.messageSuccess)})}}module.exports=new Document;