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

  test("given 6 should return `Fizz`", () => {
    const expected = "Fizz";

    const actual = fizzbuzz(6);

    expect(actual).toEqual(expected);
  });

  test("given 10 should return `Buzz`", () => {
    const expected = "Buzz";

    const actual = fizzbuzz(10);

    expect(actual).toEqual(expected);
  });

  test("given 15 should return `FizzBuzz`", () => {
    const expected = "FizzBuzz";

    const actual = fizzbuzz(15);

    expect(actual).toEqual(expected);
  });

  test("given 1 should return '1'", () => {
    const expected = "1";

    const actual = fizzbuzz(1);

    expect(actual).toEqual(expected);
  });
});
