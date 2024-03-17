"use strict"


let array = [2, 7, 6, 3, 9, 1, 4, 5, 8, 10];

let result1 = array.forEach((item)=>{
   console.log(item);
})


let result2 = array.map((item)=>{
    return item*5;
})
console.log(result2);


let doSort = (a, b) =>{
    return a - b;
}
let result3 = array.sort(doSort);
console.log(result3);


let result4 = array.toReversed();
console.log(result4); 


let result5 = array.reduce((acc, item) =>{
    acc+=item;
    return acc;
}, 0)
console.log(result5);



