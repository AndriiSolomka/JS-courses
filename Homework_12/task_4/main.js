"use strict"


class Viacle {

    constructor(speed){
        this.speed = speed;
    }

    ride(){
        console.log(`Їде зі швидкістю ${this.speed}`);
    }

    stop(){
        this.speed = 0;
        console.log(`Стоїть. Швидкість ${this.speed}`); 
    }
}


class Moto extends Viacle {

    constructor(type, speed){
        super(speed)
        this.type = type;
    }

    ride(){
        super.ride()
        console.log('Летить по трасі');
        
    }

    broke(){
        super.stop();
        console.log('Дьдько! Я зламався');
    }

}


class FireEngine extends Viacle{
    constructor(type, speed){
        super(speed);
        this.type = type;
    }

    ride(){
        super.ride()
    }

    stop(){
        super.stop();
    }

    stew(){
        super.stop();
        console.log("Гасить пожар");
    }

}

const bike1 = new Moto("Yamaha", 200);
const bike2 = new Moto('Harley-davidson', 120)


console.log('Bike 1');
bike1.ride(); 
bike1.broke();
console.log('Name:', bike1.type);
console.log('Speed:', bike1.speed);


console.log('Bike 2');
bike2.ride(); 
bike2.broke();
console.log('Name:', bike2.type);
console.log('Speed:', bike2.speed);



const fireEngine1 = new FireEngine("Пожарна машина", 90);
const fireEngine2 = new FireEngine("Приватна пожарна машина", 110);


console.log('FireEngine1');
fireEngine1.ride(); 
fireEngine1.stop(); 
fireEngine1.stew(); 
console.log('Name:', fireEngine1.type);
console.log('Speed:', fireEngine1.speed);


console.log('FireEngine2');
fireEngine2.ride(); 
fireEngine2.stop(); 
fireEngine2.stew(); 
console.log('Name:', fireEngine2.type);
console.log('Speed:', fireEngine2.speed);





