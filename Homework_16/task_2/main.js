"use strict"


function delay(ms){
    const milliseconds = ms;

    return new Promise((resolved)=>{
        setTimeout(()=>{
            resolved()
        }, milliseconds)
    })
}

delay(3000)
.then(()=>{
    alert(`виконалось через 3 секунди`)
}) 

