// 防止变量污染
import { A2 } from './a'
//抽离命名空间
namespace A1 {
  export namespace B {
    export namespace C {
      export const d = 5
    }
  }
}

//简化命名空间
import AAA = A1.B.C
console.log(AAA.d);
console.log(A2.b);

