//Running out of space (7kyu)

//https://www.codewars.com/kata/56576f82ab83ee8268000059/train/javascript

//Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
//For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

function spacey(array){
    //declared variable of an empty array to store the new array
    let newArr = []
    //another declared variable of an empty string that will be used to build the current value without spaces.
    let str = ''
    for(let i = 0; i<array.length ; i++){
      // Append the current element to the currentString
      str += array[i]
      // Add the currentString to the result array
      newArr.push(str)
   
    }
    //return the array
    return newArr
  }