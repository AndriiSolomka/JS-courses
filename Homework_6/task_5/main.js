"use strict"


let toCamelCase = (str) => {
    let underScoreIndex, nextChar, string;
    string = str;

    while (string.includes('_')) {
        underScoreIndex = string.indexOf('_');
        nextChar = string.at(underScoreIndex + 1).toUpperCase();
        string = string.slice(0, underScoreIndex) + nextChar + string.slice(underScoreIndex + 2)
    }

    return string
}


let result = toCamelCase("user_first_name");
console.log(result);