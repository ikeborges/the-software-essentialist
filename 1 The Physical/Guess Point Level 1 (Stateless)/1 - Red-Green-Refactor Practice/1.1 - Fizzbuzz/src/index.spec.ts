import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  test("given 3 should return `Fizz`", () => {
    const expected = "Fizz";

    const actual = fizzbuzz(3);

    expect(actual).toEqual(expected);
  });

  test("given 5 should return `Buzz`", () => {
    const expected = "Buzz";

    const actual = fizzbuzz(5);

    expect(actual).toEqual(expected);
  });
});
