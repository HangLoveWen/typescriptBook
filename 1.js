let People=[
  {age:11,name:'aaa'},
  {age:22,name:'bbb'},
  {age:33,name:'ccc'}
]
// let Man=People.forEach((item,index,input) => {
//   console.log(item,index,input);
//   input[index].age=item.age+1
//   console.log(input);
// });
// let Man=People.map((item,index,input)=>{
//   return item.age+1;
// })
// console.log(Man);
// let Man=People.reduce((n,y)=>{
//   return n+y.age
// },0)
// console.log(Man);
let Man=People.filter((item)=>item.age!==11)
console.log(Man);