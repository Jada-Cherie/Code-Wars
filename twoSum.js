//Two Sum (6kyu)

//https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++){
      const result = target - numbers[i]
      const resultIndex = numbers.indexOf(result, i + 1)
      
      if (resultIndex !== -1 ){
        return [i, resultIndex]
      }
    }
    return []
  }