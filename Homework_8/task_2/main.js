"use strict"


let arr = ['Mersedes', 'Audi', 'BMW', 'VolksWagen'];

let doSort  = (a,b) => {
   return a.length - b.length;
}


let result = arr.sort(doSort);

console.log(result);