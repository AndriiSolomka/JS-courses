"use strict"


class Animal {

    constructor(word){
        this.word = word;
    }

    say(){
        console.log(this.word);
    }
    
}

const dog = new Animal("Гав!");
dog.say();

const cow = new Animal('Мууу!');
cow.say();


const tiger = new Animal('Рррррр!');
tiger.say();