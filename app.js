'use strict';

var UglifyJS = require('uglify-js');

//����ѹ��
var result = UglifyJS.minify("var b = function () {};", {fromString: true});
console.log("\n===========================");
console.log(result);

//�ļ�ѹ��
result = UglifyJS.minify(["demo.js"]);
console.log("\n===========================");
console.log(result.code);

//���ļ�ѹ����ָ��source map����վ��Դ
result = UglifyJS.minify(["main.js","demo.js"],{
    outSourceMap: "out.js.map",
    sourceRoot: "http://onbook.me",
    mangle:true
});
console.log("\n===========================");
console.log(result.code);
console.log(result.map);

