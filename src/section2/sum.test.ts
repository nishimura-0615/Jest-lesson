import { sum } from "./sum";

// it("1と2を足すと3になる", () => {
//   expect(sum(1, 2)).toBe(3);
// });
// it("1と-2を足すと-1となる",() => {
//   expect(sum(1, -2)).toBe(-1);
// });

it.each`
  a    | b       | expected
  ${1} | ${2} | ${3}
  ${1} | ${-2} | ${-1}
`("$aと$bを足すと$expectedとなる", ({a,b, expected }) => {
  expect(sum( a, b)).toBe(expected);
});
