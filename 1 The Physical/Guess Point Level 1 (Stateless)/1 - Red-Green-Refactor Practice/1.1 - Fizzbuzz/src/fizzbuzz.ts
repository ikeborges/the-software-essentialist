function fizzbuzz(x: number) {
  const isMultipleOfThree = x % 3 === 0;
  const isMultipleOfFive = x % 5 === 0;

  if (isMultipleOfThree && isMultipleOfFive) return "FizzBuzz";
  if (isMultipleOfThree) return "Fizz";
  if (isMultipleOfFive) return "Buzz";

  return x.toString();
}

export default fizzbuzz;
