"use strict"


const user = {

    name: 'Andrii',
    age: 18,
    country: 'Ukraine',

}


const setLength = (obj) =>{
    let object = obj
    let count = 0;
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            count++
        }
    }
    object.length = count

    return object
}

const result = setLength(user);
console.log(result);