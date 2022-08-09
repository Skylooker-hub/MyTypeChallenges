/*
  3243 - FlattenDepth
  -------
  by jiangshan (@jiangshanmeta) #medium #array
  
  ### Question
  
  Recursively flatten array up to depth times.
  
  For example:
  
  ```typescript
  type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
  type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
  ```
  
  If the depth is provided, it's guaranteed to be positive integer.
  
  > View on GitHub: https://tsch.js.org/3243
*/

/* _____________ Your Code Here _____________ */

// 这道题，需要控制打平的次数，因此需要先实现打平一次的函数，再递归调用即可

// FlattenOnce 就是打平一次，同时利用数组长度来辅助计数

// 当递归没有达到深度 U 时，就用 [...P, any] 的方式给数组塞一个元素

// 下次如果能匹配上 P['length'] extends U 说明递归深度已达到。

// 如果深度未达到，判断 FlattenOnce<T> 与 T 是否相等，相等则停止递归。

type FlattenOnce<T extends any[], U extends any[] = []> = T extends [infer X, ...infer Y]
  ? X extends any[]
    ? FlattenOnce<Y, [...U, ...X]>
    : FlattenOnce<Y, [...U, X]>
  : U;

type FlattenDepth<
  T extends any[],
  U extends number = 1,
  P extends any[] = []
> = P["length"] extends U
  ? T
  : FlattenOnce<T> extends T
  ? T
  : FlattenDepth<FlattenOnce<T>, U, [...P, any]>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3243/answer
  > View solutions: https://tsch.js.org/3243/solutions
  > More Challenges: https://tsch.js.org
*/
