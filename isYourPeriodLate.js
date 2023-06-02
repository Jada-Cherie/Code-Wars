//Is Your Period late (8 kyu)

//https://www.codewars.com/kata/578a8a01e9fd1549e50001f1

function periodIsLate(last, today, cycleLength) {
    const differenceInDays = Math.floor((today - last) / (1000 * 60 * 60 * 24))
    return differenceInDays > cycleLength
  }