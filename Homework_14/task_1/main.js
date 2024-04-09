"use strict"


const print = (start, end) =>{

   if(start > end){
    return end;

   } else{
    console.log(start);
    print(start + 1, end)
   }

}
let result1 = print(1, 10);


const calcFactorial = (number) =>{

    let factorial;

    if(number === 1){
        return 1

    }else{
        factorial = number * calcFactorial(number - 1)
    }

    return factorial
    
}
let result2 = calcFactorial(5);
console.log("----CalcFactorial----");
console.log(result2);


const createMultBy = (num) =>{

    return function(num2){
        return num * num2
    }
}


const multBy5 = createMultBy(5);
const multBy2 = createMultBy(2);
console.log('----CreateMultBy----');
console.log(multBy5(4)) // 20
console.log(multBy5(6)) // 30

console.log(multBy2(4)) // 8
console.log(multBy2(6)) // 12