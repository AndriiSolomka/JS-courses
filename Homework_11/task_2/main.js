"use strict"


const viacle = {
    ride (){
        console.log(`Їду на ${this.name} зі швидкістю ${this.speed}`);
    },

}


const car = {
    name: 'BMW',
    speed: 160,

    __proto__: viacle
}


const bicycle = {
    name: 'CTM',
    speed: 35,

    __proto__: viacle
}

car.ride();
bicycle.ride()