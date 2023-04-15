// Calculate BMI (8kyu)

//https://www.codewars.com/kata/57a429e253ba3381850000fb/javascript

// DESCRIPTION:
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


function bmi(weight, height) {
    let bMI = weight/Math.pow(height, 2)
    if (bMI <= 18.5){
      return "Underweight"
    }else if (bMI <=25.0){
      return "Normal"  
    }else if(bMI <= 30){
      return "Overweight"
    }else if(bMI > 30){
      return "Obese"
    }
  }