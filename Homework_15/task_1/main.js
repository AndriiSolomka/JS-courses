"use strict"


const showDelay = (msg) =>{
   setTimeout(()=>{
    console.log(msg);
   }, 2000)
}

//showDelay('Hi!')


const repeat = (msg) =>{
    setInterval(()=>{
        console.log(msg);
    }, 2000)
}

//repeat('Bye!')


let repeat2 = setTimeout(function repeatRec(){
    //console.log('Bye!');
    repeat2 = setTimeout(repeatRec, 2000)
}, 2000)


const boom = (count) =>{
    
    let repeat = setTimeout(function repeatCount(){
         console.log(count);
         count--;
         if(count > 0){
            repeat = setTimeout(repeatCount, 1000)
        } else{
            console.log('Boom!');
        }
    }, 0)
        
}

boom(10)