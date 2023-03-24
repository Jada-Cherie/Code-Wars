function century(year) {
    let centuries = 0
    for(let i = 0; i < year; i++){
      if(i % 100 === 0){
        centuries++
      }
    }
    return centuries;
  }