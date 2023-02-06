type Pperson = {
  name: string,
  age: number,
  text: string
}
// type R<T>={
//   readonly [P in keyof T]:T[P]
// }
// type man=R<Pperson>

type Rec<k extends keyof any, T> = {
  [P in k]: T
}
type key = string | number | symbol
type K = 1 | 2 | 3
type B2 = Rec<K, Pperson>
let obj: B2 = {
  1: { name: 'xm', age: 22, text: '厉害' },
  2: { name: 'xm', age: 22, text: '厉害' },
  3: { name: 'xm', age: 22, text: '厉害' },
}