//Sum of Multiples (8 kyu)

//https://www.codewars.com/kata/57241e0f440cd279b5000829

function sumMul(n,m){
    // Check if n or m is not a natural number
      if (n <= 0 || m <= 0) {
        return "INVALID"
      }
    
      let sum = 0
    
      for (let i = n; i < m; i += n) {
        sum += i
      }
    
      return sum
    }