import $ from 'jquery'
import './css/1.css'
import './css/1.less'
// import './css/1.scss'
$(function () {
    $('li:odd').css('backgroundColor','pink')//odd表示奇数
    $('li:even').css('backgroundColor','lightblue')//even表示偶数
});
class Person {
    static info='aaaa'
}
console.log(Person.info)

//--------------------------------------------
import Vue from 'vue'
//导入的那个文件组件
import App from './components/App.vue'
const vm=new Vue({
    el:'#app',
    render:h=>h(App)//在webpack中只支持render
})