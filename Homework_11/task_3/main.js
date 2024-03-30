"use strict"



const animal = {
    sleep(){
        console.log('Я сплю...');
    }
}

const dog = {
    showVoice(){
        console.log('Гав!');
    },

    __proto__: animal
}


const pug = {
    name: 'Moysha',
    sleep(){
        console.log("Я сплю і храплю");
    },

    sayHi(){
      console.log(`Доброго вечора! Мене звати ${this.name}!`);  
    },

    __proto__: dog
}


pug.sleep();
pug.showVoice();
pug.sayHi();
