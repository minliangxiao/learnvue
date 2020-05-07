##前端模块化
####模块化规范分为哪几种？
- 浏览器端的模块化规范：AMD，CMD
- 服务器端的模块化规范：CommonJS规范（node.js就是用的这个规范）
- ES6模块化规范

**Node.js中通过babel体验ES6模块化**
####通过babel让node.js体验ES6模块化
```markdown
 - npm i --save-dev @babel/core @bable/cli @babel/preset-env @babel/node
 - npm i --save @babel/polyfill 
 - 项目跟目录创建文件babel.config.js
 - babel.config.js 文件内容如下
      const presets=[
        ["@babel/env",{
        targets:{
            edge:"17",
            firefox:"60",
            chrome:"67",
            safari:"11.1"
           }
        }]
];
module.exports={presets};
 - 通过 npx babel-node index.js 执行代码
```

####直接导入并执行模块代码
- 1如何默认导入/导出？

使用 export default { 成员名... }进行默认导出
使用 import 接收名称 from "模块标识符" 进行默认导入
- 2、如何按需导入/导出？

export let num = 998; 按需导出某个成员
import { num } from "./test.js"；按需导入其他模块的成员
- 3、如何直接导入并执行js代码？

import "./test2.js";
## webpack
####在项目中安装和配置webpack
```md
如何安装和配置webpack？
A.安装webpack：npm install webpack webpack-cli -D(-D表示只用于开发模式不用于生产模式   初始化目录npm init -y)
B.创建一个 webpack.config.js 并进行配置
module.exports = {
        mode:"development"//可以设置为development(开发模式)，production(发布模式:会压缩js文件)
}
C.修改项目中的package.json文件添加运行脚本dev
"scripts":{
        "dev":"webpack"
 }
D.运行dev命令进行项目打包：npm run dev
E.在页面中引入项目打包之后在dist文件夹中生成的js文件
<script src="../main.js"></script>（项目中就只有这个文件才能生效）
F.浏览页面查看效果

```
####配置自动打包相关的参数
```markdown
1、如何设置webpack的入口和出口？
可以通过改变 webpack.config.js 来设置入口/出口的js文件，如下：
const path = require("path");//引入node.js中的path模块操作路径
module.exports = {
    mode:"development",
    //设置入口文件路径_dirname是当前项目的全路径
    entry: path.join(__dirname,"./src/xx.js"),
    //设置出口文件
    output:{
        //设置路径
        path:path.join(__dirname,"./dist"),
        //设置文件名
        filename:"res.js"
    }
}

2、如何设置webpack自动打包？
A.安装自动打包功能的包:webpack-dev-server
        npm install webpack-dev-server -D
B.修改package.json中的dev指令如下：
        "scripts":{
            "dev":"webpack-dev-server"
        }
C.将引入的js文件路径更改为：<script src="/bundle.js"></script>
D.运行npm run dev，进行打包
E.打开网址查看效果：http://localhost:8080



3、如何配置打包完成之后，自动打开默认预览页面？
A.安装默认预览功能的包:html-webpack-plugin
        npm install html-webpack-plugin -D
B.修改webpack.config.js文件，如下：
        //导入包
        const HtmlWebpackPlugin = require("html-webpack-plugin");
        //创建对象
        const htmlPlugin = new HtmlWebpackPlugin({
            //设置生成预览页面的模板文件
            template:"./src/index.html",
            //设置生成的预览页面名称
            filename:"index.html"
        })
C.继续修改webpack.config.js文件，添加plugins信息：
        module.exports = {
            ......
            plugins:[ htmlPlugin ]
        }


packge.json中的配置
--open 打包完成后自动打开浏览器页面

--host 配置ip地址
--port 配置端口
eg: "scripts":{ "dev":"webpack-dev-server --open --host 127.0.0.1 --port 8888"





```

#### webpack loader(帮助webpack打包非js文件)
##### 打包css文件  
- 运行npm i style-loader css-loader -D命令，安装处理css文件的loader
- 在webpack.config.js的module->rules数组中，添加loader规则如下
    ```markdown
   module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']}
  ]}
 


其中，test表示匹配的文件类型，use表示对应调用的loader

 **  注意 ：use数组中指定的loader顺序是固定的  多个loader的调用顺序是从后往前调的**
##### 打包处理less文件
 - 运行npm i less-loader less -D命令
 - 在webpack.config.js的module->rules数组中，添加loader规则如下
 ```markdown
module:{
    rules:[
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']}
  ]}
```
##### 打包处理scss文件
- 运行npm i sass-loader node-sass -D命令
- 在webpack.config.js的module->rules数组中，添加loader规则如下
```markdown
module:{
    rules:[
      {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}
  ]}
```
####配置postCss自动添加css的兼容前缀
- 运行 npm i postcss-loader autoprefixer -D命令
- 在项目根目录中创建postcss的配置文件 postcss.config.js，并初始化如下配置：
```markdown
 const autoprefixer=require('autoprefixer') //导入自动添加前缀的插件
module.exports={
    plugins: [ autoprefixer] //挂载插件
}
```
- 在webpack.config.js的module->rules数组中，修改css的loader规则如下
```markdown
module:{
    rules:[
      {test:/\.c ss$/,use:['style-loader','css-loader','postcss-loader']}
  ]}
```
#### 打包样式表中的图片和字体资源
- 运行 npm i url-loader file-loader -D 命令
- 在webpack.config.js的module->rules数组中，添加loader规则如下
```markdown
module:{
    rules:[
      {test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
        use:['url-loader?limit=16940']}
  ]}
```
**注意：其中？之后的是loader的参数项  limit 用来指定图片的大小，单位是字节（byte） 也就是说只有图片大小小于limit才会转换成base64图片**
####  如何打包处理js文件中的高级语法?
A.安装babel转换器和babel语法插件包
npm i babel-loader @babel/core @babel/runtime -D
语法插件
npm i @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties -D
B.在项目根目录创建并配置babel.config.js文件
module.exports = {
        presets:["@babel/preset-env"],
        plugins:[ "@babel/plugin-transform-runtime", "@babel/plugin-proposal-class-properties" ]
    }
C.配置webpack.config.js的module中的rules数组
rules:[
                        .......
	{  test:/\.js$/,  use:"babel-loader",  exclude:/node_modules/  }
]

##Vue单文件组件由哪几个部分组成？
  1).template组件组成的模板区域
  
  2).script组成的业务逻辑区域
  
  3).style样式区域
  
  ####如何配置.vue文件的加载器？
      A.安装vue组件的加载器
          npm install vue-loader vue-template-compiler -D
      B.配置规则：更改webpack.config.js的module中的rules数组
          const VueLoaderPlugin = require("vue-loader/lib/plugin");
          const vuePlugin = new VueLoaderPlugin();
          module.exports = {
              plugins:[ htmlPlugin, vuePlugin  ],
              module : {
                  rules:[
                      .......                { 
                          test:/\.vue$/,
                          loader:"vue-loader",
                          
                      }
                  ]
              }
          }
####如何在一个项目中引入并使用单文件组件？
    A.安装vue
        npm install vue -S
    B.在index.js中引入vue和单文件组件
    	import Vue from "vue"
    	import app from "./components/App.vue";
     C.创建Vue实例对象并指定el，最后使用render函数渲染单文件组件
    	const vm = new Vue({
        el:"#first",
        //通过render函数，把指定的组件渲染到el区域中
        render:h=>h(app)
    })
#### webpack打包发布
```markdown
在package.json文件中配置webpack打包命令
该命令默认加载项目根目录中的wenpack.config.js配置文件
"scripts":{
//用于打包的命令
"build":"webpack -p"
//用于开发调试的命令
"dev":"webpack-dev-server --open --host 127.0.0.1 --port 3000"
}
``` 