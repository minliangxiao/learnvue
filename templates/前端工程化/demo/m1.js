let a=10
let c=20
let d=30

function show(){
    console.log('aaaaaaaa')
}
// 默认导出成员变量(在每个文件中只允许向外唯一的使用一次export default)
export default {
    a,
    c,
    show
}