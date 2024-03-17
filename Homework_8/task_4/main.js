"use strict"


let array = [4,4,4,3,3,3];

let doSort = (a,b) => {
    return a-b;
}

let sortedArr = array.toSorted(doSort)
console.log(sortedArr);


let res = sortedArr.sort((a, b) => {
    let occurrencesA = array.filter(item => item === a).length;
    let occurrencesB = array.filter(item => item === b).length;
    
    return occurrencesA - occurrencesB;
}).pop();

console.log(res);




