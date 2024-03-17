"use strict"


let strings = ["Привіт", "Світ", "Привіт", "Світ","Привіт", "Привіт", "Світ", "Світ", ":-O"];


let res = strings.reduce((acc, item)=>{
    if(!acc.some(element => element === item)){
        acc.push(item);
    }
    return acc;
    
},[])

console.log(res);

