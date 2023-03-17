import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  describe("Multiples of 3 should return `Fizz`", () => {
    test.each([3, 6])("given %d should return `Fizz`", (multipleOfThree) => {
      expect(fizzbuzz(multipleOfThree)).toEqual("Fizz");
    });
  });

  describe("Multiples of 5 should return `Buzz`", () => {
    test.each([5, 10])("given %d should return `Buzz`", (multipleOfFive) => {
      expect(fizzbuzz(multipleOfFive)).toEqual("Buzz");
    });
  });

  describe("Multiples of both 3 and 5 should return `FizzBuzz`", () => {
    test.each([15])(
      "given %d should return `FizzBuzz`",
      (multipleOfThreeAndFive) => {
        expect(fizzbuzz(multipleOfThreeAndFive)).toEqual("FizzBuzz");
      }
    );
  });

  describe("Non-multiples of 3 and 5 should be returned as string", () => {
    test.each([
      [1, "1"],
      [2, "2"],
    ])("given %d should return '%s'", (nonMultipleOfThreeAndFive, expected) => {
      const result = fizzbuzz(nonMultipleOfThreeAndFive);
      expect(result).toEqual(expected);
    });
  });
});
