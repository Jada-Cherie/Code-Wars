//Is He Gonna Survive (8 kyu)

//https://www.codewars.com/kata/59ca8246d751df55cc00014c/javascript



function hero(bullets, dragons) {
    while (dragons > 0) {
      if (bullets >= 2) {
        bullets -= 2; // Decrease the number of bullets by 2 for each dragon
        dragons--; // Decrease the number of dragons by 1
      } else {
        return false; // If there are dragons remaining but not enough bullets, return false
      }
    }
    
    return true; // If all dragons are defeated, return true
  }
  