//leapyear(7kyu)
//https://www.codewars.com/kata/526c7363236867513f0005ca/javascript
//mycode
function isLeapYear(year) { 
    let leap
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      leap = true
      }else {
        leap = false
    }
    return leap
}

//other solutions I found on codewar when submitted
function isLeapYear(year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

const isLeapYear = year => new Date(year, 1, 29).getDate() == 29;
