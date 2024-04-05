"use strict"


let actor = {
    name: "Tom Hardy",
    age: 44,
    gender: "Male",
    nationality: "British",
    lastFilm: "Venom: Let There Be Carnage"
};


const getEntries = (actor) =>{
    let obj = actor
    let entries = []
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            entries.push([key,obj[key]])
        }
    }


    return entries

}

const result = getEntries(actor);
console.log(result);

