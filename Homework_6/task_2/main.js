"use strict"

 
let  isPalindrom = (str) =>{

    let string = str.split(' ').join('').toLowerCase();
    let reverse = '';
    
    for(let i = string.length-1; i >= 0; --i){
        reverse += string.charAt(i);
    }

    if(reverse === string)  {
        return true;
    }
     else {
        return false;
     } 


}

let result = isPalindrom("І розморозь зором зорі ");
console.log(result);
 

