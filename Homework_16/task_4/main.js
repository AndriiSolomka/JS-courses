"use strict"

console.log("start");

function calcFib(n){

    if(n === 1){
        return 0
    }

    if(n === 2){
        return 1;
    }

   return calcFib(n-1) + calcFib(n-2)
}

console.log(calcFib(12));


const fibPromise = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(calcFib(45))
    }, 10000)
})

fibPromise.then(result =>{
    console.log('Результат розрахунку', result);
})

console.log("end");