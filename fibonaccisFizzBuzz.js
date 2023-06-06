//Fibonacci's FizzBuzz

//https://www.codewars.com/kata/57bf599f102a39bb1e000ae5

var fibsFizzBuzz = function(n) {
    if (n === 1) {
      return [1]
    }
  
    const fibonacci = [1, 1]
  
    for (let i = 2; i < n; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }
  
    for (let i = 0; i < n; i++) {
      if (fibonacci[i] % 3 === 0 && fibonacci[i] % 5 === 0) {
        fibonacci[i] = 'FizzBuzz'
      } else if (fibonacci[i] % 3 === 0) {
        fibonacci[i] = 'Fizz'
      } else if (fibonacci[i] % 5 === 0) {
        fibonacci[i] = 'Buzz'
      }
    }
  
    return fibonacci
  }