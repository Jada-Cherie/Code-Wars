//Reversed Sequnece (8 kyu)
//https://www.codewars.com/kata/5a00e05cc374cb34d100000d/javascript

//DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    //create an array, there is none given
    let arr = []
    //return an array of intergers that go from 5 to 1
    for(let i = 1; i <= n; i++){
      //take the variable i and place it in the push method
      //i represents the the integer value that is being added to the arr array in each iteration of the for loop.
      arr.push(i)
      }
      //console.log()
    //return the array and then add the reverse method to switch the code around
    return arr.reverse()
}