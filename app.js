'use strict';

var UglifyJS = require('uglify-js');

//代码压缩
var result = UglifyJS.minify("var b = function () {};", {fromString: true});
console.log("\n===========================");
console.log(result);

//文件压缩
result = UglifyJS.minify(["demo.js"]);
console.log("\n===========================");
console.log(result.code);

//多文件压缩，指定source map和网站来源
result = UglifyJS.minify(["main.js","demo.js"],{
    outSourceMap: "out.js.map",
    sourceRoot: "http://onbook.me",
    mangle:true
});
console.log("\n===========================");
console.log(result.code);
console.log(result.map);

