function fizzbuzz(x: number) {
  if (x % 3 === 0) return "Fizz";

  return x === 3 ? "Fizz" : "Buzz";
}

export default fizzbuzz;
