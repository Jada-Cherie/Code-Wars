//Palindromes Here and There

//https://www.codewars.com/kata/5838a66eaed8c259df000003

function convertPalindromes(numbers) {
    return numbers.map(number => {
      const reversed = number.toString().split('').reverse().join('')
      return number.toString() === reversed ? 1 : 0
    })
  }