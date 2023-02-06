// interface name {
//   name: string
// }
// interface age {
//   age: number
// }
// interface gender {
//   gender: string
// }
// let na: name = { name: 'zs' }
// let ag: age = { age: 18 }
// let gen: gender = { gender: '男' }

// let zs = Object.assign(na, ag, gen)
class name1 {
  name: string
  getName(): string {
    return this.name
  }
}
class BO {
  type: boolean
  changeType(): void {
    this.type = !this.type
  }
}
class CD implements name1, BO {
  name: string = 'zs'
  type: boolean = false
  getName(): string {
    return this.name
  }
  changeType(): void {
    this.type = !this.type
  }
}
mixin(CD, [name1, BO])
function mixin(curClas: any, itemClas: any[]) {
  itemClas.forEach(item => {
    // console.log(item);
    Object.getOwnPropertyNames(item.proptype).forEach(name => {
      curClas.proptype[name] = item.proptype[name]
    })
  });
}
let ccc = new CD()
console.log(ccc.type);
ccc.changeType()
