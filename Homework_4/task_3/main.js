"use strict"


const number = +prompt('Введіть число, щоб знайти факторіал: ');
let factorial = 1;


if(number === 0){
    console.log(`${number}! = 1`); // так как 0! = 1 (единичный случай)
} else {
    for(let i = 1; i <= number; i++){
        factorial *= i;
    }
    console.log(`${number}! = ${factorial}`);
}


