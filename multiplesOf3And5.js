//Multiples of 3 and 5's

//https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number){
    let arr=[];
    for (let i=number-1;i>=0;i--){
      if (i%3===0) arr.push(i);
      if (i%5===0) arr.push(i);
}
  return [...new Set(arr)].reduce((a,b)=>a+b,0)
}