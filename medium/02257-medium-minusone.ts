/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #中等 #math
  
  ### 题目
  
  给定一个正整数作为类型的参数，要求返回的类型是该数字减 1。
  
  例如:
  
  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```
  
  > 在 Github 上查看：https://tsch.js.org/2257/zh-CN
*/

/* _____________ 你的代码 _____________ */

// 注意: 可能导致递归过深
// type MinusOne<T extends number, Result extends unknown[] = []> = Result["length"] extends T
//   ? Result extends [any, ...infer Rest]
//     ? Rest["length"]
//     : never
//   : MinusOne<T, [...Result, unknown]>;

// 注意： 可能导致元组过大
type MinusOne<T extends number> = CountToT<`${T}`> extends [...infer M1, 1] ? M1["length"] : 0;

type CountToT<T extends string, Count extends 1[] = []> = T extends `${infer First}${infer Rest}`
  ? CountToT<Rest, N<Count>[keyof N & First]>
  : Count;

type N<T extends 1[] = []> = {
  "0": [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T];
  "1": [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1];
  "2": [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1];
  "3": [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1];
  "4": [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1];
  "5": [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1, 1];
  "6": [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1, 1, 1];
  "7": [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1, 1, 1, 1];
  "8": [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1, 1, 1, 1, 1];
  "9": [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1, 1, 1, 1, 1, 1];
};

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<9999>, 9998>>
];

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/2257/answer/zh-CN
  > 查看解答：https://tsch.js.org/2257/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
