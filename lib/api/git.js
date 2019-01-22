"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),fs=require("fs-extra"),Git=require("nodegit"),Console=require("console"),zipApi=require("../zipapi/"),GitApi=/*#__PURE__*/function(){function a(){(0,_classCallCheck2.default)(this,a)}return(0,_createClass2.default)(a,[{key:"appiumUpdate",/**
   * @description Clone from git appium skeleton and making zip archive
   * @param {String} path
   */value:function b(a){fs.mkdir("./tmp"),Git.Clone(process.env.GIT_REPOSITORY_APPIUM,process.env.TMP).then(function(b){Console.log("Cloned ",b.workdir()),zipApi.makeArch(a,"appium"),fs.remove("./tmp")}).catch(function(a){return Console.error(a)})}/**
   * @description Clone from git selenium skeleton and making zip archive
   * @param {String} path
   */},{key:"seleniumUpdate",value:function b(a){fs.mkdir("./tmp"),Git.Clone(process.env.GIT_REPOSITORY_SELENIUM,process.env.TMP).then(function(b){Console.log("Cloned ",b.workdir()),zipApi.makeArch(a,"selenium"),fs.remove("./tmp")}).catch(function(a){return Console.error(a)})}/**
   * @description Clone from git webdriver.io skeleton and making zip archive
   * @param {String} path
   */},{key:"webdriverIO",value:function b(a){fs.mkdir("./tmp"),Git.Clone(process.env.GIT_REPOSITORY_WEBDRIVER,process.env.TMP).then(function(b){Console.log("Cloned ",b.workdir()),zipApi.makeArch(a,"webdriverIO"),fs.remove("./tmp")}).catch(function(a){return Console.error(a)})}}]),a}();module.exports=new GitApi;