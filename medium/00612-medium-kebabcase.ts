/*
  612 - KebabCase
  -------
  by Johnson Chu (@johnsoncodehk) #medium #template-literal
  
  ### Question
  
  `FooBarBaz` -> `foo-bar-baz`
  
  > View on GitHub: https://tsch.js.org/612
*/

/* _____________ Your Code Here _____________ */
type AlphaMap = {
  a: "A";
  b: "B";
  c: "C";
  d: "D";
  e: "E";
  f: "F";
  g: "G";
  h: "H";
  i: "I";
  j: "J";
  k: "K";
  l: "L";
  m: "M";
  n: "N";
  o: "O";
  p: "P";
  q: "Q";
  r: "R";
  s: "S";
  t: "T";
  u: "U";
  v: "V";
  w: "W";
  x: "X";
  y: "Y";
  z: "Z";
};

type Alpha = keyof AlphaMap;

type UpperAlpha = AlphaMap[Alpha];

// type KebabCase<
//   S extends string,
//   Result extends string = "",
//   First = true
// > = S extends `${infer L}${infer Rest}`
//   ? L extends UpperAlpha
//     ? First extends true
//       ? KebabCase<Rest, `${Result}${Lowercase<L>}`, false>
//       : KebabCase<Rest, `${Result}-${Lowercase<L>}`, false>
//     : KebabCase<Rest, `${Result}${L}`, false>
//   : Result;

type KebabCase<S extends string, IsFirstLetter = true> = S extends `${infer L}${infer R}`
  ? `${L extends UpperAlpha
      ? `${IsFirstLetter extends true ? "" : "-"}${Lowercase<L>}`
      : L}${KebabCase<R, false>}`
  : S;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
  Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
  Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
  Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
  Expect<Equal<KebabCase<"-">, "-">>,
  Expect<Equal<KebabCase<"">, "">>,
  Expect<Equal<KebabCase<"😎">, "😎">>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/612/answer
  > View solutions: https://tsch.js.org/612/solutions
  > More Challenges: https://tsch.js.org
*/
