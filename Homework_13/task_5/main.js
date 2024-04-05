"use strict"


let car1 = {
    model: "Mersedes",
    price: 50000,

    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return this.model;
        } else if (hint === 'number') {
            return this.price;
        } else {
            return this.price;
        }
    }
};
  

let car2 = {
    model: "Audi",
    price: 40000,


    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return this.model;
        } else if (hint === 'number') {
            return this.price;
        } else {
            return this.price;
        }
    }
};

console.log(car1 + car2); // 90000
alert(car1); // Mersedes
alert(car2); // Audi