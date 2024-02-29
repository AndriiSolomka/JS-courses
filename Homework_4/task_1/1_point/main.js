"use strict"


const number1 = +prompt('Перше число: ');
const number2 = +prompt('Друге число: ');

let check1 = number1 > number2;
let check2 = number1 < number2;


let message =  check1 ?  'Перше число більше' : check2 ? 'Друге число більше' : 'Числа рівні';

console.log(message)


/* if(number1 > number2){
    console.log('Перше число більше');
} else if (number1 < number2){
    console.log('Друге число більше');
} else{
    console.log('Числа рівні');
} */