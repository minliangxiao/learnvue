const express=require('express');
const app=express();
const bodyParser=require('body-parser');
//处理静态资源
app.use(express.static('public'))
///处理参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//设置允许跨域访问该服务
app.all('*',function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Headers', 'mytoken');
    next();
});

//路由
app.get('/data',(req,res)=>{
    res.send('hello world!!')
});

app.get('/books',(req,res)=>{
    res.send('传统的方式获取参数！'+req.query.id);
});

app.get('/books/:id',(req,res)=>{
    res.send('restful风格获取参数！'+req.params.id);
});
app.post('/books',(req,res)=>{
    res.send('post获取参数！'+req.body.uname+'---'+req.body.pwd);
});

app.get('/adata',(req,res)=>{
    res.send('hello axios');
});
//启动监听
app.listen(3000,()=>{
    console.log('running.......')
})
