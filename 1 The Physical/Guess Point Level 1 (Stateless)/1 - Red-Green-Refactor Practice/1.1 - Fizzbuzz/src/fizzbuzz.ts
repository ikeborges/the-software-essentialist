function fizzbuzz(x: number) {
  if (x % 3 === 0 && x % 5 === 0) return "FizzBuzz";
  if (x % 3 === 0) return "Fizz";
  if (x % 5 === 0) return "Buzz";

  return x.toString();
}

export default fizzbuzz;
