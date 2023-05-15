//Set Reducer (7 kyu)

//https://www.codewars.com/kata/63cbe409959401003e09978b

// DESCRIPTION:
// Set Reducer
// Intro
// These arrays are too long! Let's reduce them!

// Description
// Write a function that takes in an array of integers from 0-9, and returns a new array:

// Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
// Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4
// Example

// [0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

// Your function should then repeat the process on the resulting array, and on the resulting array of that, until it returns a single integer:

// [0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]

// When your function has reduced the array to a single integer following these rules, it should return that integer.

// [2] => 2

// Rules and assertions
// All test arrays will be 2+ in length
// All integers in the test arrays will be positive numbers from 0 - 9
// You should return an integer, not an array with 1 element
function setReducer(input) {
    while (input.length > 1) {
        //declared an empty array to push the new data too
      let arr = [];
        //set up a for loop to count through each iteration
      for (var i = 0; i < input.length; i++) {
        //(used chatgpt to figure line 38 out) had to declare a variable to keep track of the count of identical numbers
        let count = 1;
        // checks to see if the current number is equal to the next number
        while (input[i] === input[i + 1]) {
            // Increments the count and move to the next number
          count++;
          i++;
        }
        // pushs the count into the new array
        arr.push(count);
      }
      
      // Updates the input array to the new array for the next iteration
      input = arr;
    }
    //return the new array
    return input[0];
  }