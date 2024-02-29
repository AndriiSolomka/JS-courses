"use strict"


const start = +prompt('Введіть перше число: ');
const finish = +prompt('Введіть останнє число: ');

let numberFor = start;
let numberWhile = start;
let finishNum = finish;



for (numberFor; numberFor <= finishNum; numberFor++){
    if(numberFor % 5 === 0){
         console.log(numberFor);
    }
 }

console.log('While');

while(numberWhile <= finishNum){
    if(numberWhile % 5 === 0){
        console.log(numberWhile);
    }
    numberWhile++;
}



