import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  test("given 3 should return `Fizz`", () => {
    const expected = "Fizz";

    const actual = fizzbuzz(3);

    expect(actual).toEqual(expected);
  });
});
