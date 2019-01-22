"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),fs=require("fs-extra"),Unzip=require("adm-zip"),Console=require("console"),zipFolder=require("zip-folder"),_require=require("path"),resolve=_require.resolve,Helper=/*#__PURE__*/function(){function a(){(0,_classCallCheck2.default)(this,a)}return(0,_createClass2.default)(a,[{key:"checkFolder",/**
   * @description Check folder exist
   * @param {String} path
   */value:function b(a){fs.emptyDir(a,function(a){return a?Console.error(a):void Console.log("SUCCESS")})}/**
   * @description Execute zip archive
   * @param {String} pathArch
   * @param {String} pathToExt
   */},{key:"exectArch",value:function d(a,b){var c=new Unzip(resolve(__dirname,a));c.extractAllTo(b,!0),checkFolder(b)}/**
   * @description Make zip archive
   * @param {String} path
   * @param {String} name
   */},{key:"makeArch",value:function c(a,b){zipFolder(a,"./".concat(b,".zip"),function(b){b&&Console.log(b),fs.remove(a,function(a){return a?Console.error(a):void Console.log("EXCELLENT")})})}}]),a}();module.exports=new Helper;