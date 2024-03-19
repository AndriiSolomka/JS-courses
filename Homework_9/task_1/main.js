"use strict"


let map = new Map();
map.set(true, 'boolean');
map.set(11, 'number');
map.set('KPI', 'string');
map.set(Symbol, 'id = computer engineering');
map.set({}, 'object');
map.set(1234567890123456789n,'BigInt');
map.set(undefined, 'undefined');
map.set(null, '0');


let result = map.forEach((value, key) => {
    console.log(key, value);
})


let obj = Object.fromEntries(map)
console.log(obj);


let map2 = new Map(Object.entries(obj));
console.log(map2);


