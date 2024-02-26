"use strict"

const correctPassword = 'JavaScript_basic_Solomka2024';
const userPassword = prompt('Введіть пароль: ');
if (correctPassword === userPassword){
    alert('Ласкаво просимо!');
} else {
    alert('Пароль не вірний');
}