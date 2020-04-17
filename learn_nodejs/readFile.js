/*这是对node.js 内置的函数进行讲解*/
const fs=require('fs');
fs.readFile('require.js','utf8',(err,doc)=>{//err表示 读取出错的信息  doc 表示读取成功后读取到的内容
    console.log(err);
    console.log(doc);
})
