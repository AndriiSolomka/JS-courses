"use strict"


let doCapitalize = (str) => {
    return (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
}


let result = doCapitalize("яК СПРавИ?");
console.log(result);



let  reverseString = (str) =>{

    let string = str;
    let reverse = '';
     
    for(let i = string.length-1; i >= 0; --i){
        reverse += string.charAt(i);
    }

    return reverse;
}
 

let result2 = reverseString("Привіт");
console.log(result2);



let convertToBinary = (num) => num.toString(2);

let result3 = convertToBinary(15);
console.log(result3);




let  generateRandomFloat = (n) => +(Math.random() * 100).toFixed(n);

let result4 = generateRandomFloat(5);
console.log(result4);


