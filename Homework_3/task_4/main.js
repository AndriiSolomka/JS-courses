"use strict"


const number1 = +prompt('Перше число: ');
const number2 = +prompt('Друге число: ');


if(number1 > number2){
    console.log('Перше число більше');
} else if (number1 < number2){
    console.log('Друге число більше');
} else{
    console.log('Числа рівні');
}