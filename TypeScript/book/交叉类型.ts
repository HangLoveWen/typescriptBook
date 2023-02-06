//联合类型
// let phonenum:number|string='123456'
// function fn(type:number|boolean):boolean{
//   return !!type
// }
// let results=fn(true)
// console.log(results)

//交叉类型
// interface People{
//   name:string,
//   age:number
// }
// interface Man{
//   sex:string
// }
// const ma=(man:People & Man):void=>{
//   console.log(man)
// }
// ma({name:'zs',age:18,sex:'男'})

// 断言
// let fn2=function(num:number|string):void{
//   console.log((num as string).length)
// }
// fn2(12345)

// interface A{
//   run:string
// }
// interface B{
//   build:string
// }

// let fn3=(type:A|B):void=>{
//   console.log((type as A).run)
// }
// fn3({
//   build:'123'
// })

// window.a=123
// (window as any).a=123