//Pete, the Baker

//https://www.codewars.com/kata/525c65e51bf619685c000059

function cakes(recipe, available) {
    const maxCakes = Object.keys(recipe).reduce((max, ingredient) => {
      
      const recipeAmount = recipe[ingredient]
      
      const availableAmount = available[ingredient] || 0
      
      const ingredientRatio = Math.floor(availableAmount / recipeAmount)
      
      return Math.min(max, ingredientRatio);
    }, Infinity)
  
    return isFinite(maxCakes) ? maxCakes : 0
  }