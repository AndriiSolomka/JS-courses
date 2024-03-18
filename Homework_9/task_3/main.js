"use strict";


let aclean = (array) => {
    let map = new Map();

    array.forEach(item => {
        let key = item.split('').sort().join('');

        if (!map.has(key)) {
            map.set(key, item);
        }
    });

    return Array.from(map.values());
};

let array = ["материк", "мошкара", "апельсин", "спанієль", "мінотавр", "ромашка", "норматив", "метрика"];
let result = aclean(array);
console.log(result);
