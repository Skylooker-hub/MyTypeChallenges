/*
  3188 - Tuple to Nested Object
  -------
  by jiangshan (@jiangshanmeta) #medium #object
  
  ### Question
  
  Given a tuple type ```T``` that only contains string type, and a type ```U```, build an object recursively.
  
  ```typescript
  type a = TupleToNestedObject<['a'], string> // {a: string}
  type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
  type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type
  ```
  
  > View on GitHub: https://tsch.js.org/3188
*/

/* _____________ Your Code Here _____________ */

// 注意： narring，infer 获取到的类型需要进行类型收缩或推导
type TupleToNestedObject<T, U> = T extends [...infer Rest, infer L]
  ? TupleToNestedObject<Rest, Record<L & string, U>>
  : U;

// type TupleToNestedObject<T, U> = T extends [...infer Rest, infer L extends string]
//   ? TupleToNestedObject<Rest, Record<L, U>>
//   : U;

// type TupleToNestedObject<T extends unknown[], R> = T extends [infer F, ...infer Rest]
//   ? Record<F & string, TupleToNestedObject<Rest, R>>
//   : R;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<TupleToNestedObject<["a"], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<["a", "b"], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject<["a", "b", "c"], boolean>, { a: { b: { c: boolean } } }>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>
];

type a = TupleToNestedObject<["a"], string>;

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3188/answer
  > View solutions: https://tsch.js.org/3188/solutions
  > More Challenges: https://tsch.js.org
*/
