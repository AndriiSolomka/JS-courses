"use strict"


let calcPow = (x = 9, n = 1) => {
    let result = 1;
    for (let i = 0; i < n; i++){
        result *= x; 
    } 
    return result;
}


console.log(calcPow(3, 3));
