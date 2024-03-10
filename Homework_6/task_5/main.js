"use strict"


let toCamelCase = (str) => {
    let underScore, next;

    while (str.includes('_')) {
        underScore = str.indexOf('_');
        next = str.at(underScore + 1).toUpperCase();
        str = str.slice(0, underScore) + next + str.slice(underScore + 2)
      
    }

    return str
}


let result = toCamelCase("user_first_name");
console.log(result);