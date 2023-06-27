//my code

function mango(quantity, price){
    //cost equation
    const costEq = Math.floor(quantity/3)
    //calculate the cost of offer
    const cost = costEq * (2* price)
    //pice of the remaining fruit
    const otherFruit =  quantity % 3
    //remaining fruit cost
    const otherFruitCost = otherFruit * price
    //total cost
    const totalCost = cost + otherFruitCost
    
    return totalCost
}
//some one liners I found
function mango(quantity, price){
    return price * (quantity - Math.floor(quantity / 3));
  }

  function mango(quantity, price){
    return Math.floor(quantity / 3) * 2 * price + quantity % 3 * price;
  }

  const mango = (quantity, price) => Math.ceil(quantity / 1.5)*price;
