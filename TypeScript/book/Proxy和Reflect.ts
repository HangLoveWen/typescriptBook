type person = {
  name: string,
  age: number,
  text: string
}
const proxy = (object: any, key: any) => {
  return new Proxy(object, {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver)
    },
    set(target, prop, value, receiver) {
      return Reflect.set(target, prop, value, receiver)
    }
  })
}
// const logAccess =(object:person,key:"name"|"age"|"text")=>{
//   return proxy(object,key)
// }
const logAccess = <T>(object: T, key: keyof T): T => {
  return proxy(object, key)
}
let man: person = logAccess({
  name: 'mh',
  age: 18,
  text: '真厉害'
}, 'name')
let man2: person = logAccess({
  name: 'mh',
  age: 18,
  text: '真厉害',
  id: 1
}, "id")