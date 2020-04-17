const a = require('./module-a'); //require是导入模块 参数返回的是 参数地址文件中的exports对象
console.log(a.add(10,20));