abstract class A {
  name:string
  constructor(name : string) {
    this.name=name
  }
  abstract getName():string
}
class B extends A {
  constructor() {
    super('xw')
  }
  getName(): string {
      return this.name
  }
}
let b=new B()
console.log(b.getName())