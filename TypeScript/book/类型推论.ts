// let str='小马'
// let a
//不指定类型，推断出类型
//类型别名
type s=number|string
let str:s='小马'
let number:s=123
//函数类型别名
type cb=()=> string
const a1:cb=()=>'小嘛'
//字面量类型别名
type t='off'|'on'|false|5
const a2:t='off'//只能是off或者on