"use strict"


const number = +prompt('Введіть число');

if(!(number < 20 || number > 80)){
    console.log('Число в діапазоні');
} else{
    console.log('Число не діапазоні');
}
