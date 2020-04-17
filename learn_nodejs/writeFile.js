const fs=require('fs');
fs.writeFile('./demo.txt','写入内容成功',err=>{
    if (err!=null){
        console.log(err);
        return;
    }
    console.log('写入文件内容成功')
})