//定义类
// class People{
//   name:string
//   age:number
//   gender:string
//   constructor(name:string,age:number,gender:string){
//     this.name=name
//     this.age=age
//     this.gender=gender
//   }
// }
// console.log(new People('zs',8,'男'));

// 类的修饰符
//public内部外部都能访问
// class People{
//   public name:string
//   age:number
//   gender:string
//   constructor(name:string,age:number,gender:string){
//     this.name=name
//     this.age=age
//     this.gender=gender
//   }
// }
// console.log(new People('zs',8,'男'));
// let p=new People('zs',8,'男')
// console.log(p.name);

//private内部能访问
// class People{
//   private name:string
//   age:number
//   gender:string
//   constructor(name:string,age:number,gender:string){
//     this.name=name
//     this.age=age
//     this.gender=gender
//   }
// }
// console.log(new People('zs',8,'男'));
// let p=new People('zs',8,'男')
// console.log(p.name);不允许访问

//protected内部和子类能访问
// class People{
//   protected name:string
//   age:number
//   gender:string
//   constructor(name:string,age:number,gender:string){
//     this.name=name
//     //内部可以访问
//     this.age=age
//     this.gender=gender
//   }
// }

// class MAn extends People{
//   constructor(){
//     super('xm',22,'男')
//     this.name//子类中可以访问
//   }
// }
// console.log(new People('zs',8,'男'));
// let p=new People('zs',8,'男')

//static静态属性
// class People{
//   protected name:string
//   age:number
//   gender:string
//   static sub:boolean=true
//   constructor(name:string,age:number,gender:string,){
//     this.name=name
//     this.age=age
//     this.gender=gender
//   }
// }
// People.sub
//可以直接通过类名调用静态属性

//接口通过implements约束类
