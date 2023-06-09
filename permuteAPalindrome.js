//Permute a Palindrome

//https://www.codewars.com/kata/58ae6ae22c3aaafc58000079

function permuteAPalindrome(input) {
    const charCount = {}
  
    for (let i = 0; i < input.length; i++) {
      const char = input[i]
      charCount[char] = (charCount[char] || 0) + 1
    }
  
    let oddCount = 0;
    for (const char in charCount) {
      if (charCount[char] % 2 !== 0) {
        oddCount++
      }
    }
  
    return oddCount <= 1
  }