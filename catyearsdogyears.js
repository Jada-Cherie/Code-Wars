//Cat Years, Dog Years

const humanYearsCatYearsDogYears = humanYears => {
    let catYears = 0;
    let dogYears = 0;
    if (humanYears === 1) {
      dogYears = 15;
      catYears = 15;
    } else if (humanYears === 2) {  
      catYears = 24;
      dogYears = 24;
    } else {
      catYears = 4 * (humanYears - 2) + 24;
      dogYears = 5 * (humanYears - 2) + 24;
    }
    return [humanYears, catYears, dogYears];
  }