/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #简单 #built-in
  
  ### 题目
  
  > 欢迎 PR 改进翻译质量。
  
  实现内置的Exclude <T, U>类型，但不能直接使用它本身。
  
  > 从联合类型T中排除U的类型成员，来构造一个新的类型。
  
  例如：
  
  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```
  
  > 在 Github 上查看：https://tsch.js.org/43/zh-CN
*/


/* _____________ 你的代码 _____________ */

type MyExclude<T, U> = T extends U ? never : T;
// 当类型参数为联合类型，并且在条件类型左边直接引用该类型参数的时候，TypeScript 会把每一个元素单独传入来做类型运算，最后再合并成联合类型，这种语法叫做分布式条件类型


/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]



/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/43/answer/zh-CN
  > 查看解答：https://tsch.js.org/43/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

