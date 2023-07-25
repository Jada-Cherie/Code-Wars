// Valid Braces

//https://www.codewars.com/kata/5277c8a221e209d3f6000b56

//DESCRIPTION:
// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces){
    const stack = []
  const openingBraces = "([{"
  const closingBraces = ")]}"
  
  for (const char of braces) {
    if (openingBraces.includes(char)) {
      stack.push(char)
    } else if (closingBraces.includes(char)) {
      const lastOpeningBrace = stack.pop()
      const correspondingOpeningBrace = openingBraces[closingBraces.indexOf(char)]
      
      if (lastOpeningBrace !== correspondingOpeningBrace) {
        return false
      }
    }
  }
  
  return stack.length === 0 // If the stack is empty, all braces were matched correctly

}