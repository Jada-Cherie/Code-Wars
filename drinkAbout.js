//Drink About (8 kyu)

//https://www.codewars.com/kata/56170e844da7c6f647000063/train/javascript

function peopleWithAgeDrink(old) {
    let drink
    if (old <= 13) {
      drink = "drink toddy"
    }else if (old <= 17) {
      drink = "drink coke"
    }else if (old <= 20) {
      drink = "drink beer"
    }else if (old >= 21 ) {
      drink = "drink whisky"
    }
      
    return drink
}

