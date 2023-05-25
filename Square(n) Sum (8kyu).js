// Square(n) Sum (8kyu)

// https://www.codewars.com/kata/515e271a311df0350d00000f/javascript

//I believe this is a code that is done with Vonds, I don't remember
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 +2^2 = 9

//square each of the numbers in the array
//take all of the numbers and then add them together

function squareSum(numbers){
    let sum = 0
    numbers.forEach(number => sum += number ** 2)
    //forEach is a method that goes through each slot in the array 
    return sum
  }
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 +2^2 = 9

//square each of the numbers in the array
//take all of the numbers and then add them together
function SqSum (numbers) {
  let sum = 0
  numbers.forEach(number => sum += number ** 2)

  return sum
} 

  















