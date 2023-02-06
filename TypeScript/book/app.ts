// let str:string='123'
// let mub:string=`web${str}`
// console.log(mub)
// let num:number=Infinity
// let b:boolean=false
// console.log(b)
// let u:undefined=undefined
// let n:void=null
// let str:string='Hello world! typeScript'
// console.log(str)

//通用类型any 可以任意赋值

// let anys:any='my name is mh'
// anys=18
// anys='123'
// anys=Symbol('123')

//通用类型unknow,unknow比any更安全
// let unknow:unknown={name:'a'}
// unknow.a()//不存在a

// let str:unknown='aaa'
// let str2:string='bbb'
// str2=str unknown的值只能赋值给unknown和any

// let str:unknown='aaa'
// let str2:unknown='bbb'
// str2=str

// let str:unknown='aaa'
// let str2:any='bbb'
// str2=str
