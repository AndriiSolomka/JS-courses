"use strict"


function callback_BasedFunction(arg1, arg2, callback) {
    // Perform asynchronous operations
    // Call the callback with the result or error
    setTimeout(() => {
     const result = arg1 + arg2;
     if (result % 2 !== 0) {
      callback(null, result);
     } else {
      callback(new Error('Result is not odd!'), null);
     }
    }, 1000);
}


function delateCallback (arg1, arg2){
    return new Promise((resolve, reject) => {
        const result = arg1 + arg2;
        setTimeout(()=>{
            if (result % 2 !== 0) {
                resolve(result);
               } else {
                reject('Помилка складання!')
               }
        }, 1000)
       
    })
}

delateCallback(1,3)
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    throw new Error(error);
})

