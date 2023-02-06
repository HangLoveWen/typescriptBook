// interface User{
//   name:string,
//   age:number
// }
// const fn=function fn(user:User):User{
//   return user
// }
// let a=fn({
//   name:'zs',
//   age:20
// })
// console.log(a)
//函数重载
function fn(params:number):void
function fn(params:string,params2:number):void
function fn(params:any,params2?:number):void{
  console.log(params) 
  console.log(params2) 
}
let a=fn('1',1)