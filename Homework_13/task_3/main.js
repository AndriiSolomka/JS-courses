"use strict"

let actor = {};

Object.defineProperties(actor,{

    name:{
        value: 'Jhon',
        writable: false,
        enumerable: true,
        configurable:false,
    },
    surname:{
        value:'Sine',
        writable:true,
        enumerable: true,
        
    },
    salary:{
        value: 1_000_000,
        enumerable: true,
        writable:true,
        configurable:true,
    },

    age:{
        value:35,
        enumerable: true,
    },


})




//actor.name = 'Andrii'
//delete actor.name
actor.surname = 'Solomka'
//actor.salary = 100

console.log(Object.values(actor))
