"use strict"


const number1 = +prompt('Перше число: ');
const number2 = +prompt('Друге число: ');



let message =  (number1 > number2) ?  'Перше число більше' : (number1 < number2) ? 'Друге число більше' : 'Числа рівні';
console.log(message)


/* if(number1 > number2){
    console.log('Перше число більше');
} else if (number1 < number2){
    console.log('Друге число більше');
} else{
    console.log('Числа рівні');
} */