//Counting Duplicates

//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

//DESCRIPTION:
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
    // Convert the input text to lowercase to make it case-insensitive
    const lowerText = text.toLowerCase()
    
    // Create an empty object to store character counts
    const charCounts = {}
    
    // Loop through each character in the lowerText
    for (const char of lowerText) {
      // Check if the character is a letter or digit
      if (/[a-z0-9]/.test(char)) {
        // If the character is not in the charCounts object, initialize its count to 1
        // Otherwise, increment its count
        charCounts[char] = (charCounts[char] || 0) + 1
      }
    }
    
    // Initialize a variable to keep track of the number of duplicates
    let duplicateCount = 0
    
    // Loop through the counts object and count the duplicates
    for (const char in charCounts) {
      if (charCounts[char] > 1) {
        duplicateCount++
      }
    }
    
    // Return the final count of duplicates
    return duplicateCount
  }