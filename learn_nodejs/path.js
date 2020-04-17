const path=require('path');
/*在node.js中 __dirname能够获取到当前文件所在的绝对路径
好用的命令行三方库 nodemon

* */
const filePath=path.join('public','uploads','avater');//这样拼接下来  在windows系统下面 filePath=public/uploads/avater
console.log(filePath);