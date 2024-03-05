"use strict"


let calcFib = (n) =>{
    let firstEl, nextEl, currentEl;
    firstEl = 1;
    nextEl = 1;
    
    if(n === 1 || n === 2){
        return 1;
    } else{
        for(let i = 1; i <= n; i++){

            if(i!== n-1){
                currentEl = firstEl + nextEl;
                firstEl = nextEl;
                nextEl = currentEl;
            } else{
                return currentEl; 
            } 
        }
    }
}

console.log(calcFib(4))