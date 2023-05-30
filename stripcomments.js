//Strip Comments (8 kyu)

//https://www.codewars.com/kata/51c8e37cee245da6b40000bd

function solution(input, markers) {
    const lines = input.split('\n');  // Split the input string into lines
    const result = []  // Create an empty array to store the modified lines
  
    for (let line of lines) {
      for (let marker of markers) {
        const index = line.indexOf(marker)  // Find the index of the marker in the line
  
        if (index !== -1) {
          line = line.substring(0, index).trim()  // Remove the marker and everything after it, then trim whitespace
          break;  // Stop searching for more markers in the current line
        }
      }
  
      result.push(line)  // Add the modified line to the result array
    }
  
    return result.join('\n')  // Join the lines back together into a string
  }