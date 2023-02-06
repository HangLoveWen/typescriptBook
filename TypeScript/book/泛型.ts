// let sz: Array<number> = [1, 2, 3]
// function iterator1(ard: any) {
//   let a: Iterator<any> = ard[Symbol.iterator]()
//   let it: any = { done: false }
//   while (!it.done) {
//     it = a.next()
//     if (!it.done) {
//       console.log(it);
//     }
//   }
// }
// iterator1(sz)

//函数泛型
// 要支持两种类型要写两次函数
// function num(num1:number,num2:number):Array<number>{
//   return [num1,num2]
// }
// function str1(num1:string,num2:string):Array<string>{
//   return [num1,num2]
// }
//使用函数泛型约束可以动态决定传入参数的类型
// function str1<T>(num1: T, num2: T): Array<T> {
//   return [num1, num2]
// }
// str1<number>(1, 2)
// str1<string>('1', '2')

//交叉类型函数泛型
// function arr6<T,u>(a:T,b:u):Array<T|u>{
//   let arr:Array<T|u>= [a,b]
//   return arr
// }
// arr6(1,false)

// interface Len {
//   length: number
// }
// function getLength<T extends Len>(arg: T) {
//   return arg.length
// }
//  getLength<number>(123)
// getLength<string>('1,2,3')

//TS泛型
// function getnum<T, K extends keyof T>(num: T, key: K) {
//   return num[key]
// }
// getnum('123456', 6)

//类泛型
class Sub<T> {
  attr: T[] = []
  add(a: T): T[] {
    return [a]
  }
}
let b1 = new Sub<number>()
b1.attr = [1, 2, 3]
b1.add(1)


