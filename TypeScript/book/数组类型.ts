// let arr:string[]=['123','456']
// let arr1:number[]=[123,456]
// let arr2:boolean[]=[true,false]
// let arr3:any[]=['123',456]
// 通过泛型约束数组
// let arr1:Array<number>=[123,456]
// let arr2:Array<string>=["123","456"]
// let arr3:Array<boolean>=[true,false]
// 多维数组
let arr1:number[][]=[[123,456],[123,456]]
// 联合类数组
let arr2:Array<Array<number|string>>=[[123,'123'],[123,'123']]