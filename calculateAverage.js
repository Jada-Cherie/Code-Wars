//Calculate Average

//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921


function findAverage(array) {
  if (array.length === 0) {
    return 0 // return 0 for empty arrays
  }

  var sum = 0
  for (var i = 0; i < array.length; i++) {
    sum += array[i]
  }

  var average = sum / array.length;
  return average
}