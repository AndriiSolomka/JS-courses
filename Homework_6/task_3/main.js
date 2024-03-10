"use strict"


 let sumOfNumbers = (number) => {
    let num = String(number);
    let intSum = 0;
    let charSum = '';

    for(let char of num) {

        if(char !== num.at(-1)) {
            charSum += char + ' + ' ;
       }

        intSum += parseFloat(char);

    }

    let correctCharSum = charSum + num.at(-1)
    let res = `${correctCharSum} = ${intSum}`
    return res
}

let result = sumOfNumbers(12256);
console.log(result);













