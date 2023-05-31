//Alternate Case (8 kyu)

//https://www.codewars.com/kata/57a62154cf1fa5b25200031e

function alternateCase(s) {
    return s
      .split('') // Convert the string into an array of characters
      .map(function (char) {
        if (char === char.toUpperCase()) {
          return char.toLowerCase() // Switch uppercase to lowercase
        } else {
          return char.toUpperCase() // Switch lowercase to uppercase
        }
      })
      .join('') // Convert the array of characters back into a string
  }