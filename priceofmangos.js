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