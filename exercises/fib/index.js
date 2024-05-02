// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// 0 declare the function name and the n paramater to input
// 1 create a sub function which will call fib on itself as needed
// 2 create an array into which to push created fibonacci numbers(?)

// I did mine without referal to completed exercise column. I followed a different path; this likely below leads to O(N) complexity and the example file leads to O(log^N)


function memoize(fn) {
    const cache = {};
    return function(...args) {
      if (cache[args]) {
        return cache[args];
      }

      const result = fn.apply(this, args);
      cache[args] = result;

      return result;
    };
  }

  function slowFib(n) {
    if (n < 2) {
      return n;
    }

    return fib(n - 1) + fib(n - 2);
  }

  const fib = memoize(slowFib);

  module.exports = fib;


// function fib(n) {
//     const fibAnswers = [0, 1]
//     for (let i = (fibAnswers.length - 1); i <= n; i++) {
//         sum = fibAnswers[i] + fibAnswers[i - 1]
//         fibAnswers.push(sum)
//     }
//     return fibAnswers[n]
// }

module.exports = fib;

console.log(fib(1)) // expect 1
console.log(fib(2)) // expect 1
console.log(fib(3)) // expect 2
console.log(fib(4)) // expect 3
console.log(fib(39)) // expect 63245986
