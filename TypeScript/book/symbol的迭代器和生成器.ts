//迭代器Symbol.iterator
let arr4: Array<number> = [4, 5, 6]
// let it = arr4[Symbol.iterator]()
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// type mapkeys = number | string
// let set: Set<number> = new Set([1, 2, 3])
// let map: Map<mapkeys, mapkeys> = new Map()
// map.set('1', '王爷')
// map.set('2', '王爷2')
// console.log(map[Symbol.iterator]());
// console.log(set[Symbol.iterator]());

//迭代器实现
// function gen(erg: any) {
//   let it: Iterator<any> = erg[Symbol.iterator]()
//   let next: any = { done: false }
//   while (!next.done) {
//     next = it.next()
//     if (!next.done) {
//       console.log(next);
//     }
//   }
// }
// gen(set)
// gen(arr4)
// gen(map)

// for in遍历的是key，for of遍历的是value，foreach遍历的是key和value