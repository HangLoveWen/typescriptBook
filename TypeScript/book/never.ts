// type a3=number&string
//没有能够同时支持，所以值为never
// function fn(message:string):never{
//   throw new Error(message)
//   //因为永远没有返回值，所以用never类型
// }

// function loop():never {
//   while(true){
//     //永远不会结束死循环，所以函数为never类型
//   }
// }
interface A{
  type:'保安'
}
interface B1{
  type:'草莓'
}
interface C{
  type:'菜菜'
}
type ALL=A|B1|C
function num(val:ALL){
 switch (val.type) {
  case "保安":
    break;
  case "草莓":
    break;
  case "菜菜":
    break;
  default:
    const check:never=val
    break;
 }
}