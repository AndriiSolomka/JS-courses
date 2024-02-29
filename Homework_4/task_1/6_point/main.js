"use strict"


const value = 3;
const length = 9;
let temp;

for (let i = 1; i <= length; i++){
    temp = value * i;
    console.log(`${value} помножити на ${i} дорівнює ${temp}`);
} 

console.log('While')

let j = 1;
while(j<=9){
    temp = value * j;
    console.log(`${value} помножити на ${j} дорівнює ${temp}`);
    j++;
}

