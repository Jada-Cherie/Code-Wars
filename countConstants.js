//Count Constants(7kyu)

//https://www.codewars.com/kata/564e7fc20f0b53eb02000106/javascript

function consonantCount(str) {
    const constantRegex = /[bcdfghjklmnpqrstvwxyz]/gi
    const constants = str.match(constantRegex)
    return constants ? constants.length : 0
}
//below is the original code I had, above is the new code I had to do because to pass all the tests I had to include regex
  //   //convert string to lowercase
  //   const lowCaseStr = str.toLowerCase()
    
  //   //define vowels in array
  //   const vowels = ['a', 'e', 'i', 'o', 'u']
    
  //   // filter out the vowels
  //   const constants = [...lowCaseStr].filter(char => !vowels.includes(char))
    
  //   //return the vowels
  //   return constants.length