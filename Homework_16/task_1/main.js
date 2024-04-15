"use strict"

//POINT 1
const promise1 = new Promise((resolve) =>{
    resolve('Hello world')
})
.then(result =>{
    console.log(result);
})


 //POINT 2
function delayedMsg (msg){
    const message = msg

    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(message)
        }, 2000)  
    }) 
}

delayedMsg('Test') 
.then((result)=>{
    console.log(result);
})


//POINT 3
const promise3 = new Promise ((resolve, reject) =>{
    let random = Math.random();
    
    setTimeout(()=>{
        if(random > 1){
            resolve(random)
        } else{
            reject('Менше одиниці ):')
        }
    }, 2000)

})

promise3.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.error(error)
})


//POINT 4
function showResults (promise1, promise2, promise3){

    Promise.all([promise1, promise2,promise3])
    .then(results => {
        results.forEach(result => {
            console.log(result);
        });
    })
        
}


const promise4 = new Promise((resolve)=>{
    resolve('than KPI');
})

const promise5 = new Promise((resolve)=>{
    resolve('is worse');
})

const promise6 = new Promise((resolve)=>{
    resolve('KNU');
})

showResults(promise6, promise5, promise4);


//POINT 5
function showFirst(promise1, promise2, promise3){
    Promise.any([promise1, promise2,promise3])

    .then(results => {
        console.log(results);
    })
    
}

showFirst(promise3, promise3, promise5)
