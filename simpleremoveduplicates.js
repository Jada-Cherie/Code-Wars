//Simple remove duplicates


//https://www.codewars.com/kata/5ba38ba180824a86850000f7

function solve(arr) {
    let seen = new Set()
    let result = []
    
    for (let i = arr.length - 1; i >= 0; i--) {
      if (!seen.has(arr[i])) {
        seen.add(arr[i])
        result.unshift(arr[i])
      }
    }
    
    return result
  }