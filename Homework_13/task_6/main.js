"use strict";


const cloneObject = (obj, ...keys)  => {
    
    const sort = {};
    for (let key in obj) {
        if (!keys.includes(key)) {
            sort[key] = obj[key];
        }
    }
    return sort;

}



let actor = {
    name: "Tom Hardy",
    age: 44,
    gender: "Male",
    nationality: "British",
    lastFilm: "Venom: Let There Be Carnage",
    phone: '+380956667788'
};


const clone = cloneObject(actor, 'nationality', 'age', 'phone');
console.log(clone);

delete actor.name;

console.log(actor);
console.log(clone);
