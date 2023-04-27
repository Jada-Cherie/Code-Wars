//Mean Square Error (5kyu)

//https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript

// Complete the function that:

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.


//This declares a function called solution that takes in two arrays called firstArray and secondArray as parameters.
const solution = function(firstArray, secondArray) {
    //This creates a new array called redu and copies all the values from secondArray into it.
    let redu = [...secondArray]
    //This line is doing two things. First, it subtracts the corresponding element in firstArray from each element in redu using .map(). The result is an array of differences between the corresponding elements of both arrays. Second, it squares each element in the new array using .map(). The result is an array of squared differences between the corresponding elements of both arrays,
    redu = redu.map((x,i) =>x=x-firstArray[i]).map(x=>x=x**2)
    //This calculates the average of the squared differences between the corresponding elements of both arrays. It does this by adding up all the values in redu using .reduce(), then dividing the sum by the length of secondArray.
    return redu.reduce((p,n)=> p+n)/secondArray.length
  }

  //Someone that did it better than I did
  var solution = function(firstArray, secondArray) {

    var arr = [];
  
    for (var i = 0; i < firstArray.length; i++) {
      arr.push(Math.pow(secondArray[i] - firstArray[i], 2));
    }
    return arr.reduce((a,b) => a+b)/arr.length;
  
  }
  