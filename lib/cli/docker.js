"use strict";const{prompt}=require("inquirer"),{resolve}=require("path"),{copyFile}=require("fs-extra"),{error,log}=require("console"),path="../assets/docker/",question=[{type:"list",name:"docker",message:"Select doceker file",choices:["simple","with noVNC","three node noVNC"]}],move=a=>copyFile(resolve(__dirname,path.concat(a)),"qa-docker-compose.yml",a=>{a&&error(a),log("Success")});module.exports=()=>{prompt(question).then(a=>{switch(a.docker){case"simple":move("docker-compose-simple.yml");break;case"with noVNC":move("docker-compose-novnc.yml");break;case"three node noVNC":move("docker-compose.yml");break;default:log("Pleas try again");}})};