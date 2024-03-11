"use strict"



let person = {
    firstName: 'Andrii',
    lastName:'Solomka',
}


let phone = prompt('Введіть номер телефону: ');


let contacts = {
    phone,
    email: 'solomka@mail.ua',
}

person.contacts = contacts;

console.log(person);