"use strict"

 
let mergeArrays = (array) => {
    let sortItem = array;
    let sortedArr = new Set(sortItem.flat(Infinity));
    return Array.from(sortedArr);
}

let array = [[1, 2], [2, 2, 3], [1, 1, 2, 4]];
let result = mergeArrays(array);

console.log(result);
