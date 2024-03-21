"use strict"


let calculator = {
    num1: 0,
    num2: 0,
    read: function(number1, number2) {
        this.num1 = number1;
        this.num2 = number2;
    },
    sum: function() {
        return this.num1 + this.num2;
    },
    mul: function() {
        return this.num1 * this.num2;
    }
};

let number1 = +prompt('Input first num: ');
let number2 = +prompt('Input second num: ');

calculator.read(number1, number2);
console.log(calculator.sum()); 
console.log(calculator.mul()); 

console.log(calculator);