"use strict"


function Animal (voice){

    this.voice = voice;
    this.say = function(){
        return this.voice;
    }

}

const dog = new Animal("Гав")
console.log(dog.say())


Object.defineProperty(dog, "say", {
    enumerable: false 
});

for (let key in dog) {
    console.log(key); // voice (say - не перераховується)
}


console.log(dog); 

