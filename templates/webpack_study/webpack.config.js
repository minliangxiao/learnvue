const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')//打包插件（用于修改默认页面的）
const htmlwebpackplugin=new HtmlWebpackPlugin({//实例化一个HtmlWebpackPlugin对象
    template:'./src/index.html',
    filename:'index.html'
});
const VueLoaderPlugin=require('vue-loader/lib/plugin') //这是个构造函数 使用时需要new一下
    module.exports={
    //编译模式
    mode:'development',
  //手动配置打包的入口与出口
    entry: path.join(__dirname,'./src/index.js'),
    output:{
        path:path.join(__dirname,'./dist'),//输出文件的存放路径
        filename:'bundle.js'//输出文件的名称
    },
    plugins:[htmlwebpackplugin,new VueLoaderPlugin()] , //添加插件
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader','postcss-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use:['url-loader?limit=169']},
            {test:/\.js$/,  use:"babel-loader",  exclude:/node_modules/  },
            {test:/\.vue$/,loader:"vue-loader",}


        ]
    }

};
