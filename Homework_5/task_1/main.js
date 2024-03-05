"use strict"


let calcSum = (num1, num2) => num1 + num2;
const sumResult = calcSum(3,5);

console.log (sumResult);


let calcMultBy5 = (num) => {
    let result = 5 * num;
    console.log(`5 * ${num} = ${result}`)
};

calcMultBy5(3);


let findMax = (num1, num2) => {
    if(num1 > num2){
        return `Перше більше: ${num1} > ${num2}`;
    } else if(num1 < num2){
        return `Друге більше: ${num2} > ${num1}`;
    }else{
      return 'Числа рівні';  
    } 
}
const numbers = findMax(3,10);
console.log(numbers);

