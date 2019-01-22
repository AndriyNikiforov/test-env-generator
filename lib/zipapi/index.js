"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),fs=require("fs-extra"),Unzip=require("adm-zip"),Console=require("console"),zipFolder=require("zip-folder"),_require=require("path"),resolve=_require.resolve,Helper=/*#__PURE__*/function(){function a(){(0,_classCallCheck2.default)(this,a)}return(0,_createClass2.default)(a,[{key:"exectArch",/**
   * @description Execute zip archive
   * @param {String} pathArch
   * @param {String} pathToExt
   */value:function d(a,b){var c=new Unzip(resolve(__dirname,a));c.extractAllTo(b,!0)}/**
   * @description Make zip archive
   * @param {String} name
   */},{key:"makeArch",value:function b(a){zipFolder("./tmp","./".concat(a,".zip"),function(a){a&&Console.log("Error: ",a),fs.remove("./tmp",function(a){return a?Console.error("Error :",a):void Console.log("EXCELLENT")})})}}]),a}();module.exports=new Helper;