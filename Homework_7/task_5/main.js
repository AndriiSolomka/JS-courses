"use strict";


let sumInput = () => {
    let result = [];
    let numbers = prompt('Введіть перше число: ');
    let i = 2;

    while (numbers !== null && numbers !== '' && !isNaN(numbers)) {
        result.push(Number(numbers));
        numbers = prompt(`Введіть число №${i}`);
        i++;
    }

    let sum = 0;
    for (let item of result) {
        sum += item;
    }

    return sum;
}

let result2 = sumInput();
console.log(result2);
