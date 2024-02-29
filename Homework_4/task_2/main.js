"use strict"


let message;
let i = 1;
let sum = 0;


while(i<=5){
    message = +prompt(`Введіть число №${i}` );
    sum += message;
    i++
}
console.log(sum);