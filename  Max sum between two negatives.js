//Max sum between two negatives (7ku)

//https://www.codewars.com/kata/6066ae080168ff0032c4107a/train/javascript

// Task
// You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements. No negative element should be present in the sum. If there is no such sum: -1 for Python, JavaScript and COBOL, Nothing for Haskell, None for Rust.

// Example
// [4, -1, 6, -2, 3, 5, -7, 7] -> 8
//      ^      ^         ^
// Sum between -1 and -2 is 6, between -2 and -7 is 3 + 5 = 8. It's also not 14 (between -1 and -7), because this includes a negative number (-2).

function maxSumBetweenTwoNegatives(numbers) {
    let maxSum = -1; // Set the max sum to -1
  
  let negativeNums = []; // Create an empty array to put negative nums in

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) { // if the number is negative it will push it into the array
      negativeNums.push(i);
    }
  }

  for (let i = 0; i < negativeNums.length - 1; i++) { // Loops over pairs of negative numbers.
    let startIndex = negativeNums[i]; // The starting index is the current negative index.
    let endIndex = negativeNums[i+1]; // The ending index is the next negative index.

    let sum = 0; //sum of 0.

    for (let a = startIndex + 1; a < endIndex; a++) { // will go over numbers with negative nums
      if (numbers[a] >= 0) { // If number is positive, add it to the sum.
        sum += numbers[a];
      }
    }

    if (sum > maxSum) { // If this sum is greater than the current max sum, update the max sum.
      maxSum = sum;
    }
  }

  return maxSum; // Return the max sum.
}
