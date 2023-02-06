let s = Symbol(123)
//symbol内存地址指针不一样，所以是唯一值
let numer = Symbol(123)
console.log(s, numer);
//Symbol(123) Symbol(123)
console.log(s === numer);
// false
//ES6的Refelct.ownkeys()获取到symbol的值

