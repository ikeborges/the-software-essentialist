import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  test("given 3 should return `Fizz`", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
});
