// How Good Are You Really?

//https://www.codewars.com/kata/5601409514fc93442500010b/javascript

function betterThanAverage(classPoints, yourPoints) {
    // Calculate the sum of the classPoints array using the reduce() method
    const sum = classPoints.reduce((acc, curr) => acc + curr, 0)
    //// Calculate the sum with yourPoints included
    const newSum = sum + yourPoints
    /// Calculate the new average by dividing the newSum by the length of classPoints + 1
    const newAverage = newSum / (classPoints.length + 1)
    //// Compare yourPoints with the new average and return true if it is greater, false otherwise
    return yourPoints > newAverage
  }