"use strict"


let generateNumberInLimit = (start, end) => {

    let intNum = Math.floor(Math.random() * end) ;

    while (start > intNum){
        intNum = generateNumberInLimit(start, end);
    } 

    return intNum;
}


let res = generateNumberInLimit(5, 15);
console.log(res);