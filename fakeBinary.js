//Fake Binary (8 kyu)

//https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

function fakeBin(x){
  return x.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1')
}