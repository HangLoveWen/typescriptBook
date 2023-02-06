type Person = {
  name: string,
  age: number,
  text: string
}
type p = Pick<Person, 'age' | 'name'>
// type Par<T>={
//   [P in keyof T]?:T[P]
// }
// type p=Partial<Person>